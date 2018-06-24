
const authBtn = document.querySelector('.auth-btn');
const toMainBtn = document.querySelector(".btn-main");
const flipper = document.querySelector(".flipper");
const wrapper = document.querySelector(".wrapper");

authBtn.addEventListener("click", function(event) {
  flipper.style.transform = "rotateY(180deg)";
  authBtn.style.display = "none";
});

toMainBtn.addEventListener("click", function(event) {
    flipper.style.transform = "rotateY(0deg)";
    authBtn.style.display = "";
});

wrapper.addEventListener("click", function(event) {
    let target = event.target;
    if (target == wrapper) {
        flipper.style.transform = "rotateY(0deg)";
        authBtn.style.display = "";
    }
});




