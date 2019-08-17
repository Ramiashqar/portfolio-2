class Dropdown{
    constructor(dropMe, dropContent, dropItem){

        dropMe.addEventListener("click", () => {
          dropContent.classList.toggle("show-drop");
        });
        dropItem.forEach(el => {
          el.addEventListener("click", () => {
            dropContent.classList.toggle("show-drop");
          });
        });
    }
}

export default Dropdown;