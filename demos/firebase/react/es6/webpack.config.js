const path = require('path')

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ],
          plugins: []
        }
      }
    ]
  }
}
