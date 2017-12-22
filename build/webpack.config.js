const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  }
};

// "start": "webpack-dev-server --open --config webpack.dev.js",
    // "build": "webpack --config webpack.prod.js"