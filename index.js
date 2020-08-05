var prev = document.querySelector(".header_arrow_left");
var next = document.querySelector(".header_arrow_right");
var index = 1;
var lis = document.querySelectorAll(".bgimg");
var count = lis.length;

prev.addEventListener("click", function() {
    lis[index].classList.remove("activimg");
    index--;
    if (index < 0) {
        index = count - 1;
    }

    lis[index].classList.add("activimg");
});

next.addEventListener("click", function() {
    lis[index].classList.remove("activimg");
    index++;
    if (index > count - 1) {
        index = 0;
    }

    lis[index].classList.add("activimg");
});