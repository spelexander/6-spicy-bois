var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',

    path.resolve(__dirname, 'app/main.js')
  ],
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  disableHostCheck: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  },
  proxy: {
      "/api":{
        target:"http://localhost:5000/",
        secure:"false",
        crossOrigin:"true"
      }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.css$/, loader: 'style!css'
      }]
    },
};
