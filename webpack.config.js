const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlPlugin = require('html-plugin');

 
var config = {
   entry: './js/index.js',
   output: {
      path:      '/Users/mayankmahajan/t/dist',
      filename: 'index.js',
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
    
    new ExtractTextPlugin('style.css'),
        new WriteFilePlugin(),
         new HtmlPlugin({
      template: 'app/index.html'
    }),




new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
new webpack.optimize.UglifyJsPlugin()





  ]
}
module.exports = config;
