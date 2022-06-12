const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  indexPath: '../../www/vue-cli/index.html',
  outputDir: '../../public/assets',
  //assetsDir: '/public/assets',
  //assetsPath: 'test',
  publicPath: '/assets/library_management/assets/',
  devServer: {
    disableHostCheck: true
  }
})
