// Activate the tiny-loader before the final build
const path = require("path"),
  webpack = require("webpack"),
  HTMLWebpackPlugin = require("html-webpack-plugin"),
  miniCSSExtractPlugin = require("mini-css-extract-plugin"),
  optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  minifyPlugin = require("babel-minify-webpack-plugin"),
  // PurifyCSSPlugin = require("purifycss-webpack"),
  // glob = require("glob-all"),
  ImageminPlugin = require("imagemin-webpack"),
  imageminGifsicle = require("imagemin-gifsicle"),
  imageminSvgo = require("imagemin-svgo"),
  AppManifestWebpackPlugin = require("app-manifest-webpack-plugin"),
  // compressionPlugin = require("compression-webpack-plugin"),
  // brotliPlugin = require("brotli-webpack-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  DelWebpackPlugin = require("del-webpack-plugin");
module.exports = env => {
  return {
    entry: {
      main: ["./app/assets/scripts/index.js"]
      // sub: ["./app/assets/scripts/sub-index.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: ""
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: miniCSSExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                url: true
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: miniCSSExtractPlugin.loader // creates style nodes from JS string
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "fast-sass-loader"
            }
          ]
        },
        {
          test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/fonts/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                attrs: ["img:src"],
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.htaccess$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name]"
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/images/[name].[ext]"
              }
            }
            // {
            //   loader: "tinify-loader",
            //   options: {
            //     apikey: "hrKVx6xdXBbTmVcPqgV9VqQh9JGxCXxZ"
            //   }
            // }
          ]
        },
        {
          test: /\.(svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/images/[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new miniCSSExtractPlugin({
        filename: "app-[contenthash].css"
      }),
      // new PurifyCSSPlugin({
      //   paths: glob.sync([
      //     path.join(__dirname, "../app/index.html"),
      //     path.join(__dirname, "../app/assets/scripts/index.js")
      //   ]),
      //   minimize: true,
      //   purifyOptions: {
      //     whitelist: ["ignore-me", "me-too"]
      //   }
      // }),
      new optimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      // new HTMLWebpackPlugin({
      //   template: "./app/sub-index.html",
      //   filename: "sub-index.html",
      //   inject: true,
      //   chunks: ["sub"],
      //   title: "Webpack Setup 2"
      // }),
      new HTMLWebpackPlugin({
        template: "./app/index.html",
        inject: true,
        chunks: ["main"],
        title: "Portfolio"
      }),
      new minifyPlugin(),
      // new compressionPlugin({
      //   algorithm: "gzip"
      // }),
      // new brotliPlugin(),
      new AppManifestWebpackPlugin({
        logo: './app/assets/images/favicon.png',
        prefix: 'images/favicon/',
        output: 'images/favicon/',
        emitStats: false,
        statsFilename: 'iconstats-[hash].json',
        statsEncodeHtml: false,
        persistentCache: false,
        inject: true,
        config: {
          appName: 'RGA Framework',
          appDescription: null,
          developerName: 'Rami Ashqar',
          developerURL: 'ramiashqar.tk',
          background: '#fff',
          theme_color: '#fff', // Theme color for browser chrome.
          display: 'standalone', // Android display: "browser" or "standalone". `string`
          orientation: 'portrait', // Android orientation: "portrait" or "landscape". `string`
          start_url: '/?homescreen=1', // Android start application's URL. `string`
          version: '0.03',
          logging: false,
          icons: {
            android: false, 
            appleIcon: false,
            appleStartup: false, 
            coast: false,
            favicons: true, // Create regular favicons. `boolean`
            firefox: false, 
            windows: false,
            yandex: false,
          },
        }

      }),
      new ImageminPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminSvgo({
              removeViewBox: true
            })
          ]
        }
      }),
      new DelWebpackPlugin({
        //here I'm using it just to show all the built files in a much readable matter
        include: ["dist/trash"],
        info: true,
        keepGeneratedAssets: true,
        allowExternal: true
      })
      // new CnameWebpackPlugin({
      //   domain: "ramiashqar.tk",
      // }),
    ]
  };
};
