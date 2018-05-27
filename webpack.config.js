const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ],
  devServer: {
      contentBase: './src/public',
      port: 7700,
  }
};