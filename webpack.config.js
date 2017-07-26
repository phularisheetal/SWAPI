var webpack = require('webpack'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       use:ExtractTextPlugin.extract("css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
     } ,
     {
        test: /\.js$/,
        loader: "babel-loader", // Do not use "use" here
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
	],
};
