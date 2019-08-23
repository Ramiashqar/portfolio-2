// require("../styles/app.css");
require("../styles/app.scss");
require("../../index.html");
require("./components/skills");
require("./components/work");
//3rd party libs
//SomoothScrolling.js
require("./smooth-scroll.polyfills");
const scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutCubic"
});

//TODO:
// []
// FIXME:
// []
