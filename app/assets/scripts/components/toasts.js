class Toast {
  constructor(toast, toastContent) {
    toast.addEventListener("click", () => {
      toastContent.classList.toggle("show-toast");
      setTimeout(() => {
        toastContent.classList.toggle("show-toast");
      }, 2500);
    });
  }
}
export default Toast;
