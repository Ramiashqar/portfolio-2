import { TimelineMax } from "gsap";

import ScrollMagic from "scrollmagic";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

document.addEventListener("DOMContentLoaded", function() {
  const controller2 = new ScrollMagic.Controller();
  // define movement of panels
  const wipeAnimation = new TimelineMax()
    // animate to second panel
    .to(".work__slides", 0.5, { z: -150, delay: 1 }) // move back in 3D space
    .to(".work__slides", 1, { x: "-33.33%" }) // move in to first panel
    .to(".work__slides", 0.5, { z: 0 }) // move back to origin in 3D space
    // animate to third panel
    .to(".work__slides", 0.5, { z: -150, delay: 1 })
    .to(".work__slides", 1, { x: "-66.66%" })
    .to(".work__slides", 0.5, { z: 0 });
  //   create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#work",
    triggerHook: "onLeave",
    duration: "2500"
  })
    .setPin(".work")
    .setTween(wipeAnimation)
    .addTo(controller2);
});
