module.exports = {
  entry: './src/bootstrap.ts',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".ts",".js",""]
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: ['node_modules']
    }]
  }
}
