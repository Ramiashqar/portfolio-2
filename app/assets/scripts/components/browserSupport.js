function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  // other browser
  return false;
}
if (detectIE() && detectIE() < 13) {
  document.querySelector("body").hidden;
  document.querySelector("body").innerHTML =
    '<div class="IE-sucks"><p>Oops! <br /> It seems that you are using an old browser, please update your browser to enjoy the latest features. <br  />You can use <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>, <a href="https://www.microsoft.com/en-us/windows/microsoft-edge" target="_blank">Microsoft Edge</a>, <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a> or <a href="https://www.apple.com/lae/safari/" target="_blank">Safari</a>.</p></div>';
}
