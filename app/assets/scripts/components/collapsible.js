class Collapsible {
  constructor(collapseTrigger) {
    // Store all the collapsible elements (You can add more)
    const el0 = collapseTrigger[0],
      el1 = collapseTrigger[1],
      el2 = collapseTrigger[2];
    let activeEl;

    // Watching wich element is clicked
    collapseTrigger.forEach(el => {
      el.addEventListener("click", () => {
        activeEl = el;
        unCollapse();
      });
    });

    // Defining which element to collapse
    const unCollapse = () => {
      if (activeEl === el0) {
        el1.nextElementSibling.classList.remove("active-collapse");
        el2.nextElementSibling.classList.remove("active-collapse");
        el1.classList.remove("add-bg");
        el2.classList.remove("add-bg");
      } else if (activeEl === el1) {
        el0.nextElementSibling.classList.remove("active-collapse");
        el2.nextElementSibling.classList.remove("active-collapse");
        el0.classList.remove("add-bg");
        el2.classList.remove("add-bg");
      } else if (activeEl === el2) {
        el0.nextElementSibling.classList.remove("active-collapse");
        el1.nextElementSibling.classList.remove("active-collapse");
        el0.classList.remove("add-bg");
        el1.classList.remove("add-bg");
      }
      activeEl.classList.toggle("add-bg");
      activeEl.nextElementSibling.classList.toggle("active-collapse");
    };
  }
}
export default Collapsible;
