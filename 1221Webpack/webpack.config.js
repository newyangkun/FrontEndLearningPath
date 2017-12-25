/* webpack.config.js 是 webpack 的打包配置文件.*/
const path = require('path'); // 引用Node 核心模块 path 自动读取当前文件路径
/* 调用第三方包 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  /* 管理输出 */
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '首页',
      template: './index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist/')
  },
  devtool: 'inline-source-map',
  /* webpack-dev-server 配置项 */
  devServer: {
    // contentBase 就是用来配置服务的 www 目录
    // 默认监听端口 8080
    contentBase: './dist'
  },
  module: {
    /*
    * ① 正则表达式匹配文件后缀名
    * ② 配置需要调用的模块包
    **/
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node-modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']  //配置bable-loader 的转换规则
          }
        }
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  }
}