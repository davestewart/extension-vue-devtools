const path = require('path')
const npmRun = require('npm-run')
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin')

class ExternalVueDevtoolsPlugin {
  constructor () { }

  apply (compiler) {
    let proc

    compiler.hooks.entryOption.tap('ExternalVueDevtoolsPlugin', () => {
      const filePath = path.resolve(__dirname, 'vue-devtools.js')
      new SingleEntryPlugin(__dirname, filePath, 'vue-devtools').apply(compiler)
    })

    compiler.hooks.done.tap('ExternalVueDevtoolsPlugin', () => {
      // ensure that only one instance of vue devtools will ever run
      if (!proc) {
        proc = npmRun.spawn('vue-devtools', {
          cwd: __dirname
        })
      }
    })
  }
}

module.exports = ExternalVueDevtoolsPlugin
