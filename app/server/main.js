require("@babel/register")({
  presets: ["@babel/env"]
});
require("core-js/stable");
require("regenerator-runtime/runtime");
require("./express");
