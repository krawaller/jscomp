const fsx = require('fs-extra')
const path = require('path')
const fm = require('front-matter')
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

const source = '../demos/'
const output = '../pages/'

const getDirs = srcpath => fsx.readdirSync(srcpath)
  .filter(file => fsx.statSync(path.join(srcpath, file)).isDirectory())

const getFiles = srcpath => fsx.readdirSync(srcpath)
  .filter(file => file !== '.DS_Store')

fsx.removeSync('../index.html')
fsx.removeSync(output)
fsx.mkdirSync(output)
fsx.mkdirSync(output + 'scripts')

const data = {
  dcount: 0, frameworkList: [], icount: 0, tlength: 0, demos: [], contributors: []
}
getDirs(source).forEach(demoName => {
  data.dcount += 1
  const demopath = source + demoName + '/'
  const demoReadme = fm(fsx.readFileSync(demopath + 'README.md') + '')
  const demo = Object.assign({
    frameworks: [],
    filenames: [],
    description: marked(demoReadme.body),
    icount: 0,
    folderName: demoName
  }, demoReadme.attributes)
  getDirs(demopath).forEach(frameworkName => {
    data.frameworkList = _.uniq(data.frameworkList.concat(frameworkName))
    const niceFrameworkName = _.capitalize(frameworkName)
    const framework = {
      name: niceFrameworkName,
      folderName: frameworkName,
      implementations: []
    }
    const framepath = demopath + frameworkName + '/'
    getDirs(framepath).forEach(implName => {
      data.icount += 1
      demo.icount += 1
      const implpath = framepath + implName + '/'
      const readme = fm(fsx.readFileSync(implpath + 'README.md') + '')
      data.contributors = _.uniq(data.contributors.concat(readme.attributes.author)).sort()
      const deps = require(implpath + 'package.json').dependencies
      const impl = Object.assign(
        readme.attributes, {
          folderName: implName,
          demoName: demoName,
          framework: frameworkName,
          niceFrameworkName: niceFrameworkName,
          deps: _.map(deps, (v, pkg) => ({package: pkg, version: v})),
          frameworkVersion: deps[readme.attributes.maindep].replace(/^\^/, ''),
          explanation: marked(readme.body.replace(/^\s*|\s*$/g, '')),
          files: [],
          bundleSize: (fsx.readFileSync(implpath + 'bundle.js') + '').length,
          size: 0,
          url: `${demoName}_${frameworkName}_${implName}_info.html`,
          bundleName: `${demoName}_${frameworkName}_${implName}.js`,
          githubUrl: `http://www.github.com/krawaller/jscomp/tree/gh-pages/demos/${demoName}/${frameworkName}/${implName}`
        }
      )
      getFiles(implpath + '/src').forEach(file => {
        let content = fsx.readFileSync(implpath + '/src/' + file) + ''
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
      framework.implementations.push(impl)
    })
    demo.frameworks.push(framework)
  })
  demo.bundleName = demo.frameworks[demo.frameworks.length - 1].implementations[0].bundleName
  demo.frameworks.forEach(framework => {
    framework.implementations.forEach(impl => {
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
  data.demos.push(demo)
})

data.demos.forEach(demo => {
  demo.frameworkCount = data.frameworkList.map(f => {
    const where = demo.frameworks.findIndex(demof => demof.folderName === f)
    return where === -1 ? 0 : demo.frameworks[where].implementations.length
  })
})

// fsx.writeFileSync(output+'_data.json',beautify(JSON.stringify(data)))

const handlebars = require('handlebars')
const masterTmpl = handlebars.compile(fsx.readFileSync('templates/master.hbt') + '')
const implTmpl = handlebars.compile(fsx.readFileSync('templates/implementation.hbt') + '')
const indexTmpl = handlebars.compile(fsx.readFileSync('templates/index.hbt') + '')
const demoTmpl = handlebars.compile(fsx.readFileSync('templates/demo.hbt') + '')

const write = (path, title, content, root) => {
  fsx.writeFileSync(path, beautify.html(masterTmpl({
    TITLE: title,
    root: root,
    MAINCONTENT: content
  })))
}

const indexCtx = Object.assign(data, {
  maintext: marked(fsx.readFileSync('mainpage.md') + ''),
  contribute: marked(fsx.readFileSync('contribute.md') + '')
})
write('../index.html', 'JS Comp', indexTmpl(indexCtx), true)

data.demos.forEach(demo => {
  write(output + demo.folderName + '.html', demo.name, demoTmpl(demo))
  demo.frameworks.forEach(framework => {
    framework.implementations.forEach(impl => {
      const sections = [{
        filename: 'info',
        isInfo: true
      }].concat({
        filename: 'code',
        isCode: true,
        codeFiles: impl.files
      }).concat(impl.files)
      fsx.copySync(
        `../demos/${demo.folderName}/${framework.folderName}/${impl.folderName}/bundle.js`,
        `../pages/scripts/${demo.folderName}_${framework.folderName}_${impl.folderName}.js`
      )
      sections.forEach(file => {
        const path = `${output}${demo.folderName}_${impl.framework}_${impl.folderName}_${file.filename}.html`
        const ctx = Object.assign({
          links: sections.map(linkTo => {
            return {
              to: linkTo.filename + (linkTo.suffix || ''),
              active: linkTo.filename === file.filename,
              url: `${demo.folderName}_${impl.framework}_${impl.folderName}_${linkTo.filename}.html`
            }
          })
        }, impl, file)
        write(path, framework.name + ' - ' + impl.title, implTmpl(ctx))
      })
    })
  })
})

/** CSS files **/

const highlightTheme = 'zenburn.css'
const codeFile = fsx.readFileSync('../node_modules/highlight.js/styles/' + highlightTheme) + ''
fsx.writeFileSync(output + 'code.css', codeFile.replace(/\.hljs\s*\{/, 'pre > code {'))

fsx.copySync('./style.css', output + 'style.css')
fsx.copySync('./bootstrap.css', output + 'bootstrap.css')

console.timeEnd('build')
