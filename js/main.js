// target icon
const targetOpeeny = document.querySelector(".opeeny-icon");

// target menu
const targetMenu = document.querySelector(".active");

// event
targetOpeeny.onclick = (e) => {
    e.preventDefault();
    targetMenu.classList.toggle("active");
};