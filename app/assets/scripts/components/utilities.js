import ScrollMagic from "scrollmagic";

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu__items--item");
  const controller1 = new ScrollMagic.Controller();
  new ScrollMagic.Scene({ triggerElement: "#skills" })
    .setClassToggle("#down", "u-hide") // add class toggle
    .addTo(controller1)
    .setClassToggle(menuItems[1], "u-active");

  //  Scene 1
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#home"
  });
  scene1.setClassToggle(menuItems[0], "u-active");
  //  Scene 2
  const scene1Kill = new ScrollMagic.Scene({
    triggerElement: "#skills"
  });
  scene1Kill.setClassToggle(menuItems[0], "u-kill");
  // Scene 3
  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#work"
  });
  const scene2Kill = new ScrollMagic.Scene({
    triggerElement: "#work"
  });
  scene3.setClassToggle(menuItems[2], "u-active");
  scene2Kill.setClassToggle(menuItems[1], "u-kill");
  // Scene 4
  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#contactMe"
  });
  const scene3Kill = new ScrollMagic.Scene({
    triggerElement: "#contactMe"
  });
  scene4.setClassToggle(menuItems[3], "u-active");
  scene3Kill.setClassToggle(menuItems[2], "u-kill");
  controller1.addScene([
    scene1,
    scene1Kill,
    scene3,
    scene2Kill,
    scene4,
    scene3Kill
  ]);
});
