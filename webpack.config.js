var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: 'build.js?[hash:5]'
    filename: 'build.js'
  },
  //设置开发者工具配置
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    noInfo: true,
    overlay: true,
    inline: true, //设置为true，当源文件改变的时候会自动刷新
    host: '127.0.0.1',
    port: 3000 //监听端口
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
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //清理dist目录
    /* new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '/'),
      verbose: true,
      dry: false
    }), */
    // 处理index页面
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
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
  ]);
} else {
  module.exports.plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunksSortMode: 'dependency'
    })
  ];
}
