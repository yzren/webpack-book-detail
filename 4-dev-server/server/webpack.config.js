var webpack = require('webpack');

module.exports={
  //入口

  entry:['webpack/hot/dev-server', path.resolve(__dirname, './src/entry.js')]
  //出口
  output:{
    //文件保存到目标路径下文件夹名称“dist”
    path:'dist',
    //文件保存到目标路径下的文件
    filename:'/[name].b.js'
  },
  module:{
    loaders:[
      {test:/\.css$/,loader:'style!css'}
    ]
  }
}