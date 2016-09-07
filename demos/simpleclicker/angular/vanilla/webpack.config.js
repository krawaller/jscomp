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
            "es2015",
            "stage-0"
          ],
          plugins: []
        }
      }
    ]
  }
};