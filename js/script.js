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

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };
  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

let lightDark = document.querySelector(".lightDark");
let body = document.querySelector("body");
let img = document.querySelectorAll("img");
let dark = false;

lightDark.onclick = function () {
  dark = !dark;
  lightDark.classList.toggle("active");
  body.classList.toggle("dark");
  img.forEach((i) => {
    i.classList.toggle("imgDark");
  });
};
