class Modal {
  constructor(modalTrigger, modalContent, modalOverlay, agree, disAgree) {
    modalTrigger.addEventListener("click", () => {
      this.showModal(modalContent, modalOverlay);
    });
    modalOverlay.addEventListener("click", () => {
      this.showModal(modalContent, modalOverlay);
    });
    agree.addEventListener("click", () => {
      this.showModal(modalContent, modalOverlay);
    });
    disAgree.addEventListener("click", () => {
      this.showModal(modalContent, modalOverlay);
    });
    document.onkeydown = evt => {
      evt = evt || window.event;
      if (evt.keyCode == 27 && modalContent.classList.contains("show-modal")) {
        this.showModal(modalContent, modalOverlay);
      }
    };
  }
  showModal(mc, mo) {
    mc.classList.toggle("show-modal");
    mo.classList.toggle("show-modal");
  }
}
export default Modal;
