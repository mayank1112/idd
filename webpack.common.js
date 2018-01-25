const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/index.js'
  },
   output: {
      path:      '/Users/mayankmahajan/t/dist',
      filename: 'index.js',
   },
   module: {rules: [
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
      ]},

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
