let leftArrow = document.querySelector(".slide-show-container .slide-show-wrapper .left-arrow");
let rightArrow = document.querySelector(".slide-show-container .slide-show-wrapper .right-arrow");

let slideShow = document.querySelectorAll(".slide-show-container .slide-show-wrapper .slide-show");

console.log(leftArrow, rightArrow, slideShow);
let currentIndex = 0;
var Interval;

leftArrow.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slideShow.length - 1;
    //currentIndex = (currentIndex - 1 + slideShow.length) % slideShow.length; cach 2
    updateSlideShow();
});

rightArrow.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > slideShow.length - 1) currentIndex = 0;
    updateSlideShow();
});

function updateSlideShow() {
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    slideShow[currentIndex].style.display = "block";
}

let dot = document.querySelectorAll(".slide-show-container .dot");

function clickDot() {

    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener("click", () => {
            for (let j = 0; j < slideShow.length; j++) {
                slideShow[j].style.display = "none";
            }
            slideShow[i].style.display = "block";
        });
    }
}
clickDot();