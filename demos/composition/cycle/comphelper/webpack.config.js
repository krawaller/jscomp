module.exports = {  
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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