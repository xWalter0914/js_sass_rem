const path = require('path');
var webpack=require('webpack')

module.exports = {
  entry: ['./app.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname+ '/build',
    publicPath:'./build/'//如果直接打开index.html 就要输入这个,否则就要在服务器下
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // 将 JS 字符串生成为 style 节点
                "css-loader", // 将 CSS 转化成 CommonJS 模块
                "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
        },{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1
            }
          }
        ]
      },
    //   {
    //     test: /\.(png|jpe?g|gif)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: { 
    //         },
    //       },
    //     ],
    //   }
        ]
    }
};