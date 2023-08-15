const hamButton = document.querySelector("#ham-click");
const hamHeader = document.querySelector("#header-block");


hamButton.addEventListener("click", ()=> {
    hamHeader.classList.toggle("ham-header");
    hamHeader.classList.toggle("ham-header1");
});
