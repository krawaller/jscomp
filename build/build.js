var fsx = require('fs-extra')
var path = require('path')
var fm = require('front-matter')
var hljs = require('highlight.js')
var uniq = require('lodash/uniq')
var map = require('lodash/map')
var reduce = require('lodash/reduce')
var beautify = require('js-beautify')

console.time('build')

var marked = require('marked')
marked.setOptions({
  highlight: function (code, lang) {
    if (lang) {
      return hljs.highlight(lang, code).value
    }
    return hljs.highlightAuto(code).value
  }
})

var source = '../demos/'
var output = '../pages/'

function getDirs (srcpath) {
  return fsx.readdirSync(srcpath).filter(function (file) {
    return fsx.statSync(path.join(srcpath, file)).isDirectory()
  })
}

function getFiles (srcpath) {
  return fsx.readdirSync(srcpath).filter(function (file) {
    return file !== '.DS_Store'
  })
}

fsx.removeSync('../index.html')
fsx.removeSync(output)
fsx.mkdirSync(output)
fsx.mkdirSync(output + 'scripts')

var data = {
  dcount: 0, frameworkList: [], icount: 0, tlength: 0, demos: [], contributors: []
}
getDirs(source).forEach(function (demoName) {
  data.dcount += 1
  var demopath = source + demoName + '/'
  var demoReadme = fm(fsx.readFileSync(demopath + 'README.md') + '')
  var demo = Object.assign({
    frameworks: [],
    filenames: [],
    description: marked(demoReadme.body),
    icount: 0,
    folderName: demoName
  }, demoReadme.attributes)
  var lastBundleInDemo
  getDirs(demopath).forEach(function (frameworkName) {
    data.frameworkList = uniq(data.frameworkList.concat(frameworkName))
    var niceFrameworkName = frameworkName[0].toUpperCase() + frameworkName.substr(1)
    var framework = {
      name: niceFrameworkName,
      folderName: frameworkName,
      implementations: []
    }
    var framepath = demopath + frameworkName + '/'
    getDirs(framepath).forEach(function (implName) {
      data.icount += 1
      demo.icount += 1
      var implpath = framepath + implName + '/'
      var readme = fm(fsx.readFileSync(implpath + 'README.md') + '')
      data.contributors = uniq(data.contributors.concat(readme.attributes.author)).sort()
      var deps = require(implpath + 'package.json').dependencies
      var impl = Object.assign(
        readme.attributes, {
          folderName: implName,
          demoName: demoName,
          framework: frameworkName,
          niceFrameworkName: niceFrameworkName,
          deps: map(deps, function (v, pkg) {
            return {package: pkg, version: v}
          }),
          frameworkVersion: deps[readme.attributes.maindep].replace(/^\^/, ''),
          explanation: marked(readme.body.replace(/^\s*|\s*$/g, '')),
          files: [],
          bundleSize: (fsx.readFileSync(implpath + 'bundle.js') + '').length,
          size: 0,
          url: demoName + '_' + frameworkName + '_' + implName + '_info.html',
          bundleName: demoName + '_' + frameworkName + '_' + implName + '.js',
          githubUrl: 'http://www.github.com/krawaller/jscomp/tree/gh-pages/demos/' + demoName + '/' + frameworkName + '/' + implName
        }
      )
      lastBundleInDemo = impl.bundleName
      getFiles(implpath + '/src').forEach(function (file) {
        var content = fsx.readFileSync(implpath + '/src/' + file) + ''
        content = content.replace('// eslint-disable-line', '')
        var filebasename = file.replace(/\.[^.]*$/, '')
        var suffix = file.match(/\.([^.]*)$/, '')[1]
        var languages = {
          'js': 'javascript',
          'ts': 'typescript',
          'elm': 'elm'
        }
        demo.filenames = uniq(demo.filenames.concat(filebasename))
        impl.files.push({
          filename: filebasename,
          suffix: '.' + suffix,
          size: content.length,
          code: hljs.highlight(languages[suffix] || 'javascript', content).value,
          codeUrl: demo.folderName + '_' + impl.framework + '_' + impl.folderName + '_' + filebasename + '.html'
        })
        impl.size += content.length
        data.tlength += content.length
      })
      framework.implementations.push(impl)
    })
    demo.frameworks.push(framework)
  })
  demo.bundleName = lastBundleInDemo
  demo.frameworks.forEach(function (framework) {
    framework.implementations.forEach(function (impl) {
      impl.files.forEach(function (file) {
        var others = reduce(demo.frameworks, function (mem, f) {
          f.implementations.forEach(function (i) {
            if (i.url !== impl.url) {
              var fpos = i.files.findIndex(function (testFile) {
                return testFile.filename === file.filename
              })
              mem.push(Object.assign({
                url: i.url,
                title: i.title,
                niceFrameworkName: i.niceFrameworkName
              }, i.files[fpos] || {missing: true}))
            }
          })
          return mem
        }, [])
        var othersWithSame = others.filter(function (i) {
          return i.niceFrameworkName === impl.niceFrameworkName
        })
        var othersWithDifferent = others.filter(function (i) {
          return i.niceFrameworkName !== impl.niceFrameworkName
        })
        file.allOthers = othersWithSame.concat(othersWithDifferent)
      })
    })
  })
  data.demos.push(demo)
})

data.demos.forEach(function (demo) {
  demo.frameworkCount = data.frameworkList.map(function (f) {
    var where = demo.frameworks.findIndex(function (demof) {
      return demof.folderName === f
    })
    return where === -1 ? 0 : demo.frameworks[where].implementations.length
  })
})

// fsx.writeFileSync(output+'_data.json',beautify(JSON.stringify(data)))

var handlebars = require('handlebars')
var masterTmpl = handlebars.compile(fsx.readFileSync('templates/master.hbt') + '')
var implTmpl = handlebars.compile(fsx.readFileSync('templates/implementation.hbt') + '')
var indexTmpl = handlebars.compile(fsx.readFileSync('templates/index.hbt') + '')
var demoTmpl = handlebars.compile(fsx.readFileSync('templates/demo.hbt') + '')

var write = function (path, title, content, root) {
  fsx.writeFileSync(path, beautify.html(masterTmpl({
    TITLE: title,
    root: root,
    MAINCONTENT: content
  })))
}

var indexCtx = Object.assign(data, {
  maintext: marked(fsx.readFileSync('mainpage.md') + ''),
  contribute: marked(fsx.readFileSync('contribute.md') + '')
})
write('../index.html', 'JS Comp', indexTmpl(indexCtx), true)

data.demos.forEach(function (demo) {
  write(output + demo.folderName + '.html', demo.name, demoTmpl(demo))
  demo.frameworks.forEach(function (framework) {
    framework.implementations.forEach(function (impl) {
      var sections = [{
        filename: 'info',
        isInfo: true
      }].concat({
        filename: 'code',
        isCode: true,
        codeFiles: impl.files
      }).concat(impl.files)
      fsx.copySync(
        '../demos/' + demo.folderName + '/' + framework.folderName + '/' + impl.folderName + '/bundle.js',
        '../pages/scripts/' + demo.folderName + '_' + framework.folderName + '_' + impl.folderName + '.js'
      )
      sections.forEach(function (file) {
        var path = output + demo.folderName + '_' + impl.framework + '_' + impl.folderName + '_' + file.filename + '.html'
        var ctx = Object.assign({
          links: sections.map(function (linkTo) {
            return {
              to: linkTo.filename + (linkTo.suffix || ''),
              active: linkTo.filename === file.filename,
              url: demo.folderName + '_' + impl.framework + '_' + impl.folderName + '_' + linkTo.filename + '.html'
            }
          })
        }, impl, file)
        write(path, framework.name + ' - ' + impl.title, implTmpl(ctx))
      })
    })
  })
})

/** CSS files **/

var highlightTheme = 'zenburn.css'
var codeFile = fsx.readFileSync('../node_modules/highlight.js/styles/' + highlightTheme) + ''
fsx.writeFileSync(output + 'code.css', codeFile.replace(/\.hljs\s*\{/, 'pre > code {'))

fsx.copySync('./style.css', output + 'style.css')
fsx.copySync('./bootstrap.css', output + 'bootstrap.css')

console.timeEnd('build')
