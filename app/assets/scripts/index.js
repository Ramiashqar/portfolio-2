// require("../styles/app.css");
import lazySizes from "lazysizes";
// import 'lazysizes/plugins/respimg/ls.respimg';
require("../styles/app.scss");
require("../../index.html");
require("./components/skills");
require("./components/work");
require("./components/menu");
require("./components/utilities");
//3rd party libs
// lazyloading + responsiveimages

//SomoothScrolling.js
require("./smooth-scroll.polyfills");
const scroll = new SmoothScroll('#down', {
  easing: "easeOutCubic"
});

//TODO:
// [ ] add animations to other skills bars
// [ ] add links to the social icons
// FIXME:
// []
