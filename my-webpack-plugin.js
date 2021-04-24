const { Compilation } = require("webpack");

class MyWebPackPlugin {
  apply(compiler) {
    // compiler.hooks.done.top('My Plugin', state => {
    //   console.log('MyPlugin: done')
    // })
    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          '* 이것은 BannerPlugin이 처리한 결과 입니다.'
        ].join('\n')
        return banner + '\n\n' + source;
      }
      callback()
    })
  }
  
}

module.exports = MyWebPackPlugin;