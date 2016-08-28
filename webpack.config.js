// Dean Wagman
// deanwagman@gmail.com
// August 27th, 2016
// This file handles the config of our module bundler, webpack
// https://webpack.github.io/

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/server/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './server/dist'
  }
};
