const paths = require('../helpers/paths.ts');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = require('../helpers/env.ts');
const fs = require('fs');

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
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: 'ts-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.les$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.svg$/,
          use: [
            { loader: 'svg-sprite-loader' },
            'svg-transform-loader',
            'svgo-loader',
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
          ],
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
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          // type: 'asset/resource',
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        modules: paths.MODULES_ALIAS,
        assets: paths.ASSETS,
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
      port: 8090,
      publicPath: '/',
      https: {
        key: fs.readFileSync('/Users/bogdan/key.pem'),
        cert: fs.readFileSync('/Users/bogdan/cert.pem'),
        ca: fs.readFileSync('./create-ca-key.pem'),
      },
      proxy: {
        '/': {
          target: {
            // host: 'dev.clearslideng.com',
            protocol: 'https:',
            port: 8090,
          },
          pathRewrite: {
            '^/localhost': '',
          },
        },
      },
    },
    watch: true,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: paths.HTML_ENTRY,
        filename: 'index.html',
        favicon: `${paths.ASSETS}/favicon.png`,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
        chunkFilename: '[id].[hash:8].css',
      }),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
  };
};
