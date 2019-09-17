// require("../styles/app.css");
import lazySizes from "lazysizes";
// import "lazysizes/plugins/respimg/ls.respimg";

require("../styles/app.scss");
// require("html-loader?attrs=img:data-srcset!./../../index.html");
require("../../index.html");
require("./components/skills");
require("./components/work");
require("./components/menu");
require("./components/utilities");
require("./components/browserSupport");

const image1 = require("../images/pomodoro-mainX3.png"),
  image2 = require("../images/cofee-love-mainX3.png"),
  image3 = require("../images/portfolio-mainX3.png");
//3rd party libs
// lazyloading + responsiveimages

//SomoothScrolling.js
require("./smooth-scroll.polyfills");
const scroll = new SmoothScroll("#down", {
  easing: "easeOutCubic"
});

//TODO:
// []
// FIXME:
// []
