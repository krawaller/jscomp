"use strict";

const fsx = require('fs-extra')
const path = require('path')
var execSync = require('child_process').execSync;

const pathHelper = filePath => path.join(__dirname, filePath)
const getDirs = srcpath => fsx.readdirSync(srcpath)
  .filter(file => fsx.statSync(path.join(srcpath, file)).isDirectory())
const getFiles = srcpath => fsx.readdirSync(srcpath)
  .filter(file => file !== '.DS_Store')


const source = pathHelper('../demos/')


getDirs(source).forEach(function(demoName){
    const demoPath = source + demoName + '/'
    getDirs(demoPath).forEach(function(frameworkName){
        const frameworkPath = demoPath + frameworkName + '/'
        if (frameworkName === 'elm') return 
        getDirs(frameworkPath).forEach(function(implName){
            const implPath = frameworkPath + implName + '/'
            execSync('cd '+implPath+'; echo "Installing '+implPath+'";')
            execSync('npm install; echo "building '+implPath+'";')
            execSync('npm run build', function(error, stdout, stderr) {
                if (error) {
                    console.log("Oh wee",error);
                } else if (stderr) {
                    console.log("Oh no",stderr)
                    throw stderr
                } else {
                    console.log("Finished",implPath)
                }
            })
        })
    })
})