const path = require("path"),
  webpack = require("webpack"),
  HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: [
      "webpack-hot-middleware/client?reload=true", //ignored with heroku use only
      "./app/assets/scripts/index.js",
    ],
    // sub: [
    //   "webpack-hot-middleware/client?reload=true",
    //   "./app/assets/scripts/sub-index.js",
    // ],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]",
            },
          },
        ],
      },
      // {
      //   test: /\.png$/,
      //   use: ["url-loader?mimetype=image/png"]
      // }
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS string
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "fast-sass-loader",
          },
        ],
      },
      {
        test: /\.htaccess$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]",
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //ignored with heroku use only
    // new HTMLWebpackPlugin({
    //   template: "./app/sub-index.html",
    //   filename: "sub-index.html",
    //   inject: true,
    //   chunks: ["sub"],
    //   title: "Webpack Setup 2",
    //   favicon: "./app/assets/images/favicon.png",
    // }),
    new HTMLWebpackPlugin({
      template: "./app/index.html",
      inject: true,
      chunks: ["main"],
      title: "Portfolio",
      favicon: "./app/assets/images/favicon.png",
    }),
  ],
};
