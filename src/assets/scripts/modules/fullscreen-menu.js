
const hamburger = document.querySelector(".hamburger");
const fullscreen_menu = document.querySelector(".fullscreen-menu__wrap");
const wrapper = document.querySelector(".wrapper");
var style = getComputedStyle(fullscreen_menu);

hamburger.addEventListener("click", function(e) {
    if(style.display != "none") {
        fullscreen_menu.style.display = "none"
        wrapper.style.height = "";
    } else if (style.display == "none") {
        fullscreen_menu.style.display = "flex";
        wrapper.style.height = "100vh";
    };
  });