const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: 'url-loader?limit=20480&name=img/[name].[ext]',
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader?sourceMap'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': config.path.js,
      scss: config.path.styles,
      img: config.path.img,
      fonts: config.path.fonts,
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
}
