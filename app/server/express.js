// const express = require("express"); IN case there is a problem with @babel/register
import express from "express";
import path from "path";
const server = express(),
  webpack = require("webpack"),
  config = require("../../config/webpack.dev.js"),
  compiler = webpack(config),
  webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  ),
  webpackHotMiddleware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  ),
  staticMiddleware = express.static("dist"),
  PORT = process.env.PORT || 8080,
  expressStaticGzip = require("express-static-gzip");

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true
  })
);
server.listen(PORT, () => {
  console.log(
    `server is listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
