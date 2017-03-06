module.exports = {
  entry: './src/bootstrap.ts',
  output: {
    path: './',
    filename: './bundle.js'
  },
  resolve: {
    extensions: [".ts",".js",""]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
