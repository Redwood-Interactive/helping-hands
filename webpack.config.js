const path = require('path');
module.exports = {
  entry: '/src/index.js',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), //this is the folder you want to save your bundle in
  },

 module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
};
