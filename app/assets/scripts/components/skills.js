import { TimelineMax, TweenMax, Linear } from "gsap";

import ScrollMagic from "scrollmagic";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

document.addEventListener("DOMContentLoaded", function() {
  const controller = new ScrollMagic.Controller();
  const wipeAnimation = new TimelineMax()
    .fromTo(
      ".skills__skill-2",
      1,
      { y: "100%" },
      { y: "0%", ease: Linear.easeNone, delay: 1 }
    )
    .fromTo(
      ".skills__skill-3",
      1,
      { x: "100%" },
      { x: "0%", ease: Linear.easeNone, delay: 1 }
    )
    .fromTo(
      ".skills__skill-4",
      1,
      { x: "-100%" },
      { x: "0%", ease: Linear.easeNone, delay: 1 }
    )
    .fromTo(
      ".skills__skill-5",
      1,
      { y: "100%" },
      { y: "0%", ease: Linear.easeNone, delay: 1 }
    );
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: "onLeave",
    duration: "450%"
  })
    .setPin("#skills")
    .setTween(wipeAnimation)
    .addTo(controller);
});
