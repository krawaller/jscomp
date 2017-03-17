module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-stage-0'
          ].map(require.resolve),
          plugins: []
        }
      }
    ]
  }
}
