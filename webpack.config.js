//Helpers
var sliceArgs = Function.prototype.call.bind( Array.prototype.slice );
//Node
var path = require('path');
//NPM
var webpack = require('webpack');


//Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var sassLoaders = [
  "css-loader",
  //"autoprefixer-loader?browsers=last 2 version",
  "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src"),
];



module.exports = {

    devServer: {
      inline: true,
      colors: true,
      historyApiFallback: true,
      contentBase: 'src/public',
      publicPath: '/__build__'
    },

    entry: {


      // 'bootstrap': [
      //    'bootstrap-sass!./bootstrap-sass.config.js'
      // ],

      'angular2': [
          'jquery',
          '@reactivex/rxjs',
          'reflect-metadata',
          'angular2/angular2'

      ],

      'common': [
        'bootstrap-sass!./bootstrap-sass.config.js'
      ],

      'app': [
          './src/app/bootstrap'
      ]

    },
    output: {
        path: root('__build__'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.scss'],
        alias: {
          'rx': '@reactivex/rxjs'
        }
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
        new ExtractTextPlugin("[name].css"),
        new CommonsChunkPlugin({
            name: 'angular2',
            minChunks: Infinity,
            filename: 'angular2.js'
        }),
        new CommonsChunkPlugin({
          name: 'common',
          filename: 'common.js',
          //minChunks: Infinity,
          chunks: ['common']
        })
    ],
    module: {
        loaders: [
            {
                test:  /\.ts$/, loader: 'ts',
                exclude: [
                  /\.min\.js$/,
                  /node_modules/
                ]
            },
            {
              test: /\.scss$/,
              //loaders: ["css-loader!sass-loader" ]
              loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            },
            {
              test: /bootstrap-sass\/assets\/javascripts\//,
              loader: 'imports?jQuery=jquery'
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ]
    }
}

function root( args ) {
  args = sliceArgs( arguments, 0);
  return path.join.apply( path, [__dirname].concat( args) );
}
