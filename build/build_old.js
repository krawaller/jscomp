"use strict";

const fsx = require('fs-extra')
const path = require('path')
const fm = require('front-matter')
const handlebars = require('handlebars')
const hljs = require('highlight.js')
const _ = require('lodash')
const beautify = require('js-beautify')

console.time('build')

const marked = require('marked')
marked.setOptions({
  highlight: (code, lang) => {
    if (lang) {
      return hljs.highlight(lang, code).value
    }
    return hljs.highlightAuto(code).value
  }
})

const pathHelper = filePath => path.join(__dirname, filePath)
const getDirs = srcpath => fsx.readdirSync(srcpath)
  .filter(file => fsx.statSync(path.join(srcpath, file)).isDirectory())
const getFiles = srcpath => fsx.readdirSync(srcpath)
  .filter(file => file !== '.DS_Store')

const source = pathHelper('../demos/')
const output = pathHelper('../pages/')

fsx.removeSync(pathHelper('../index.html'))
fsx.removeSync(output)
fsx.mkdirSync(output)
fsx.mkdirSync(output + 'scripts')

// Collect framework data from framework files
let frameworks = getFiles(source+'../frameworks/').reduce(function(mem,frameworkFile){
  let frameworkName = frameworkFile.split(".")[0];
  let contents = fm(fsx.readFileSync(source+'../frameworks/'+frameworkFile, 'utf-8'));
  mem[frameworkName] = {
    id: frameworkName,
    title: contents.attributes.name,
    homepage: contents.attributes.homepage,
    description: contents.body,
    demos: {}
  };
  return mem;
},{});

// collect demo, implementation and contrib data by looping demo + demo/impl folders
let res = getDirs(source).reduce((mem,demoName)=>{
  const demopath = source + demoName + '/'
  const demoReadme = fm(fsx.readFileSync(demopath + 'README.md', 'utf-8'))
  const demoDevInstr = fsx.readFileSync(demopath + 'DEVINSTR.md', 'utf-8')
  const demo = Object.assign({
    filenames: [],
    description: marked(demoReadme.body),
    icount: 0,
    folderName: demoName,
    devInstr: marked(demoDevInstr),
    frameworks: []
  }, demoReadme.attributes)
  getDirs(demopath).forEach(frameworkName => {
    if (!frameworks[frameworkName]){
      throw `Demo ${demoName} contains unknown framework ${frameworkName}. Must add a file to the frameworks folder!`;
    }
    const framepath = demopath + frameworkName + '/'
    const niceFrameworkName = frameworks[frameworkName].title
    // loop over each implementation
    getDirs(framepath).forEach(implName => {
      const implpath = framepath + implName + '/'
      const readme = fm(fsx.readFileSync(implpath + 'README.md', 'utf-8'))
      mem.contributors[readme.attributes.author] = mem.contributors[readme.attributes.author] || []
      mem.contributors[readme.attributes.author].push(implName)
      const deps = require(implpath + 'package.json').dependencies
      const impl = Object.assign(
        readme.attributes, {
          folderName: implName,
          prefix: {a:1,o:1,u:1,e:1,i:1}[implName[0].toLowerCase()] ? 'an' : 'a',
          demoName: demoName,
          framework: frameworks[frameworkName].id,
          niceFrameworkName: niceFrameworkName,
          deps: _.map(deps, (v, pkg) => ({package: pkg, version: v})),
          frameworkVersion: deps[readme.attributes.maindep].replace(/^\^/, ''),
          explanation: marked(readme.body.replace(/^\s*|\s*$/g, '')),
          files: [],
          bundleSize: (fsx.readFileSync(implpath + 'bundle.js', 'utf-8')).length,
          size: 0,
          url: `${demoName}_${frameworkName}_${implName}_info.html`,
          bundleName: `${demoName}_${frameworkName}_${implName}.js`,
          githubUrl: `http://www.github.com/krawaller/jscomp/tree/gh-pages/demos/${demoName}/${frameworkName}/${implName}`
        }
      );
      // loop over each source file in this implementation
      getFiles(implpath + '/src').forEach(file => {
        let content = fsx.readFileSync(implpath + '/src/' + file, 'utf-8')
        content = content.replace('// eslint-disable-line', '')
        const filebasename = file.replace(/\.[^.]*$/, '')
        const suffix = file.match(/\.([^.]*)$/, '')[1]
        const languages = {
          'js': 'javascript',
          'ts': 'typescript',
          'elm': 'elm'
        }
        demo.filenames = _.uniq(demo.filenames.concat(filebasename))
        impl.files.push({
          filename: filebasename,
          suffix: '.' + suffix,
          size: content.length,
          code: hljs.highlight(languages[suffix] || 'javascript', content).value,
          codeUrl: `${demo.folderName}_${impl.framework}_${impl.folderName}_${filebasename}.html`
        })
        impl.size += content.length
      })
      frameworks[frameworkName].demos[demoName] = frameworks[frameworkName].demos[demoName] || []
      frameworks[frameworkName].demos[demoName].push(impl);
      demo.frameworks[frameworkName] = demo.frameworks[frameworkName] || []
      demo.frameworks[frameworkName].push(impl)
    })
    demo.bundleName =frameworks[frameworkName].demos[demoName][Object.keys(frameworks[frameworkName].demos[demoName])[0]].bundleName
  })
  mem.demos[demoName] = demo;
  return mem;
}, {demos:{}, implementations: {}, contributors: {}});
let demos = res.demos
let implementations = res.implementations
let contributors = res.contributors

/*
getDirs(source).forEach(demoName => {

  getDirs(demopath).forEach(frameworkName => {
    if (!frameworks[frameworkName]){
      throw `Demo ${demoName} contains unknown framework ${frameworkName}. Must add a file to the frameworks folder!`;
    }
    data.frameworkList = _.uniq(data.frameworkList.concat(frameworkName))
    const niceFrameworkName = frameworks[frameworkName].title;
    frameworks[frameworkName].demos[demoName] = frameworks[frameworkName].demos[demoName] || [];
    const framepath = demopath + frameworkName + '/'
    getDirs(framepath).forEach(implName => {
      data.icount += 1
      demo.icount += 1
      const implpath = framepath + implName + '/'
      const readme = fm(fsx.readFileSync(implpath + 'README.md', 'utf-8'))
      data.contributors = _.uniq(data.contributors.concat(readme.attributes.author)).sort()
      const deps = require(implpath + 'package.json').dependencies
      const impl = Object.assign(
        readme.attributes, {
          folderName: implName,
          prefix: {a:1,o:1,u:1,e:1,i:1}[implName[0].toLowerCase()] ? 'an' : 'a',
          demoName: demoName,
          framework: frameworks[frameworkName].id,
          niceFrameworkName: niceFrameworkName,
          deps: _.map(deps, (v, pkg) => ({package: pkg, version: v})),
          frameworkVersion: deps[readme.attributes.maindep].replace(/^\^/, ''),
          explanation: marked(readme.body.replace(/^\s*|\s*$/g, '')),
          files: [],
          bundleSize: (fsx.readFileSync(implpath + 'bundle.js', 'utf-8')).length,
          size: 0,
          url: `${demoName}_${frameworkName}_${implName}_info.html`,
          bundleName: `${demoName}_${frameworkName}_${implName}.js`,
          githubUrl: `http://www.github.com/krawaller/jscomp/tree/gh-pages/demos/${demoName}/${frameworkName}/${implName}`
        }
      );
      getFiles(implpath + '/src').forEach(file => {
        let content = fsx.readFileSync(implpath + '/src/' + file, 'utf-8')
        content = content.replace('// eslint-disable-line', '')
        const filebasename = file.replace(/\.[^.]*$/, '')
        const suffix = file.match(/\.([^.]*)$/, '')[1]
        const languages = {
          'js': 'javascript',
          'ts': 'typescript',
          'elm': 'elm'
        }
        demo.filenames = _.uniq(demo.filenames.concat(filebasename))
        impl.files.push({
          filename: filebasename,
          suffix: '.' + suffix,
          size: content.length,
          code: hljs.highlight(languages[suffix] || 'javascript', content).value,
          codeUrl: `${demo.folderName}_${impl.framework}_${impl.folderName}_${filebasename}.html`
        })
        impl.size += content.length
        data.tlength += content.length
      })
      frameworks[frameworkName].demos[demoName].push(impl);
      demo.frameworks[frameworkName] = demo.frameworks[frameworkName] || []
      demo.frameworks[frameworkName].push(impl)
    })
    demo.bundleName =frameworks[frameworkName].demos[demoName][Object.keys(frameworks[frameworkName].demos[demoName])[0]].bundleName
  })
  _.each(frameworks,(fdef,frameworkName) => {
    _.each(fdef.demos,(ddef,demoName) => {
      _.each(ddef.implementations,impl => {
        impl.files.forEach(file => {
          const others = _.reduce(demo.frameworks, (mem, f) => {
            f.implementations.forEach(i => {
              if (i.url !== impl.url) {
                const fpos = i.files.findIndex(testFile => testFile.filename === file.filename)
                mem.push(Object.assign({
                  url: i.url,
                  title: i.title,
                  niceFrameworkName: i.niceFrameworkName
                }, i.files[fpos] || {missing: true}))
              }
            })
            return mem
          }, [])
          const othersWithSame = others.filter(i => i.niceFrameworkName === impl.niceFrameworkName)
          const othersWithDifferent = others.filter(i => i.niceFrameworkName !== impl.niceFrameworkName)
          file.allOthers = othersWithSame.concat(othersWithDifferent)
        })
      })
    })
    data.demos[demoName] = demo;
  })
})
*/



// fsx.writeFileSync(output+'_data.json',beautify(JSON.stringify(data)))

const templatesPath = pathHelper('templates/')
const masterTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'master.hbs', 'utf-8'))
const implTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'implementation.hbs', 'utf-8'))
const indexInfoTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'index_info.hbs', 'utf-8'))
const indexListTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'index_list.hbs', 'utf-8'))
const indexDevTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'index_dev.hbs', 'utf-8'))
const demoInfoTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'demo_info.hbs', 'utf-8'))
const demoImplTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'demo_impl.hbs', 'utf-8'))
const demoDevTmpl = handlebars.compile(fsx.readFileSync(templatesPath + 'demo_dev.hbs', 'utf-8'))

const write = (path, title, content, root) => {
  fsx.writeFileSync(path, beautify.html(masterTmpl({
    TITLE: title,
    root: root,
    MAINCONTENT: content
  })))
}

const data = {}

const indexCtx = Object.assign(data, {
  maintext: marked(fsx.readFileSync(pathHelper('mainpage.md'), 'utf-8')),
  contribute: marked(fsx.readFileSync(pathHelper('contribute.md'), 'utf-8'))
})
write(pathHelper('../index.html'), 'JS Comp', indexInfoTmpl(indexCtx), true)
write(output + 'home_demos.html', 'JS Comp', indexListTmpl(indexCtx))
write(output + 'home_dev.html', 'JS Comp', indexDevTmpl(indexCtx))

_.each(data.demos,demo => {
  //write(output + demo.folderName + '.html', demo.name, demoTmpl(demo))
  write(output + demo.folderName + '_info.html', demo.name, demoInfoTmpl(demo))
  write(output + demo.folderName + '_impl.html', demo.name, demoImplTmpl(demo))
  write(output + demo.folderName + '_dev.html', demo.name, demoDevTmpl(demo))
  console.log("FFS",demo.frameworks)
})

_.each(frameworks,(framework,frameworkName) => {
  _.each(framework.demos,(implarr,demoName)=>{
    let demo = demos[demoName]
    implarr.forEach(impl=>{
      const sections = [{
        filename: 'info',
        isInfo: true
      }]/*.concat({
        filename: 'code',
        isCode: true,
        codeFiles: impl.files
      })*/.concat(impl.files)
      fsx.copySync(
        `${source}${demo.folderName}/${frameworkName}/${impl.folderName}/bundle.js`,
        `${output}scripts/${demo.folderName}_${frameworkName}_${impl.folderName}.js`
      )
      sections.forEach(file => {
        const path = `${output}${demo.folderName}_${impl.framework}_${impl.folderName}_${file.filename}.html`
        const ctx = Object.assign({
          links: sections.map(linkTo => {
            return {
              to: linkTo.filename + (linkTo.suffix || ''),
              active: linkTo.filename === file.filename,
              info: linkTo.isInfo,
              url: `${demo.folderName}_${impl.framework}_${impl.folderName}_${linkTo.filename}.html`
            }
          })
        }, impl, file)
        write(path, impl.framework + ' - ' + impl.title, implTmpl(ctx))
      })
    })
  })
})

/** CSS files **/

const highlightTheme = 'zenburn.css'
const codeFile = fsx.readFileSync(pathHelper('../node_modules/highlight.js/styles/' + highlightTheme), 'utf-8')
fsx.writeFileSync(output + 'code.css', codeFile.replace(/\.hljs\s*\{/, 'pre > code {'))

fsx.copySync(pathHelper('./style.css'), output + 'style.css')
fsx.copySync(pathHelper('./bootstrap.css'), output + 'bootstrap.css')

console.timeEnd('build')
