module.exports = {
  entry:[
    './src/index.js'
  ],
  output:{
    path:__dirname+'\\app',
    filename: 'js/main.js'
  },
  module:{
    loaders:[{
        test:/\.(js|jsx)$/,
        loader:'babel-loader',
        exclude: /node_modules/
    }]
  }
}
