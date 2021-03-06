const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipPlugin  = require('zip-webpack-plugin')
const path = require("path");

// Generate pages object
const pagesObj = {};
const chromeName = ["popup", "options","tab"];
chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

// 生成manifest文件
const manifest = {}
if (process.env.NODE_ENV === 'production') {
    manifest.from = path.resolve('src/manifest.production.json')
    manifest.to = `${path.resolve('dist')}/manifest.json`
} else {
    manifest.from = path.resolve('src/manifest.development.json')
    manifest.to = `${path.resolve('dist')}/manifest.json`
}
const plugins = [
  CopyWebpackPlugin([
    manifest,
    {
      from: path.resolve("src/assets"),
      to: `${path.resolve("dist")}/assets`
    }
  ])
]

// 生产环境打包dist为zip
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new ZipPlugin({
      path: path.resolve("dist"),
      filename: 'dist.zip',
    })
  )
}

module.exports = {
  pages: pagesObj,
  // // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      'content': './src/content/index.js'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins
  }
};