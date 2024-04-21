let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  header.classList.remove("active");
};
