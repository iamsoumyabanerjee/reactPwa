const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    port: 5678
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
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    /* 
    * This is for GenerateSW 
    */
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://jsonplaceholder.typicode.com/users'),
        handler: 'StaleWhileRevalidate'
      }]
    })
    /*
    * This is for InjectManifest: WIP   
    
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, './src/service-worker.js'), // './src/service-worker.js',
      swDest: './sw-dest.js'
    })
    */ 
  ] 
}