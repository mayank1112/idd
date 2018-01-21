const ExtractTextPlugin = require("extract-text-webpack-plugin");

 
var config = {
   entry: './js/index.js',
   output: {
      path:'/',
      filename: '[name].js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: { 

      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }, 
         {
            test: /\.less$/,
            use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, 
            {
                loader: "less-loader" // compiles Less to CSS
            }]
         }
      ],


   },
   plugins: [
    
    new ExtractTextPlugin('[name].css')
  ]
}
module.exports = config;
