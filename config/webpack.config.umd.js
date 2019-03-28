var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/ellipsisText/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'ellipsisText.umd.js',
    library: ['ellipsisText'],
    libraryTarget: 'umd',
    // libraryExport: "default",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: [
              'vue-style-loader',
              'css-loader',
              'less-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                  }
                }
              }
            ],
            sass: [
              'vue-style-loader',
              'css-loader',
              'less-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'assets/[name].[ext]?[hash:5]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', '.css']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: function() {
          return [require('autoprefixer')({ browsers: ['last 5 versions'] })];
        }
      }
    })
  ],
  externals: {
    EllipsisText: {
      root: 'ellipsisText',
      commonjs2: 'ellipsisText',
      commonjs: 'ellipsisText',
      amd: 'ellipsisText'
    }
  }
};
