const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/app.html',
    }),
    new VueLoaderPlugin(),
  ],
};