document
    .querySelector(".header_arrow_left")
    .addEventListener("click", leftSlide);
document
    .querySelector(".header_arrow_right")
    .addEventListener("click", rightSlide);
let intro = document.querySelector(".intro");

function leftSlide() {
    if (intro.classList.contains("rightimg")) {
        intro.classList.remove("rightimg");
    } else {
        intro.classList.add("leftimg");
    }
}

function rightSlide() {
    if (intro.classList.contains("leftimg")) {
        intro.classList.remove("leftimg");
    } else {
        intro.classList.add("rightimg");
    }
}