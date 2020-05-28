const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4001
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,  
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }    
    }, {
      test: /\.(css|scss)$/,
      exclude: [/node_modules/],
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: [/\.jpe?g$/, /\.gif$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options:{
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ] 
}