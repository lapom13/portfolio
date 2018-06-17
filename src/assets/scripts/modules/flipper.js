
const authBtn = document.querySelector('.auth-btn');
const flipper = document.querySelector('.flipper');
const wrapper = document.querySelector('.wrapper');

authBtn.addEventListener ('click', function (event) {
    flipper.style.transform = "rotateY(180deg)";
    authBtn.style.display = "none";
});

wrapper.addEventListener ('click', function (event) {
    flipper.style.transform = "rotateY(0deg)";
    authBtn.style.display = "";
});

