const paths = require('../helpers/paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('../helpers/env');

module.exports = () => {
  console.log('env', env);
  console.log('process.env', process.env);
  return {
    entry: {
      javascript: paths.JS_ENTRY,
      // Will create "styles.css" in "css" dir.
      styles: paths.STYLES_ENTRY,
    },
    mode: env.getMode,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react', '@babel/env', '@babel/preset-flow'] },
        },
        {
          test: /\.les$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                importLoaders: 1,
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        '@modules': paths.MODULES_ALIAS,
      },
    },
    output: {
      path: paths.OUTPUT,
      publicPath: './',
      filename: '[name].js',
      chunkFilename: '[id].[hash:8].js',
    },
    devServer: {
      contentBase: paths.CONTENT_BASE,
      port: env.isDevMode ? 3000 : 2000,
      publicPath: 'http://localhost:3000/',
    },
    watch: true,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
        chunkFilename: '[id].[hash:8].css',
      }),
    ],
    devtool: 'source-map',
  };
};
