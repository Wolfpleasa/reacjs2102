let slideShow = document.querySelectorAll(".slide-show-container .slide-show-wrapper .slide-show");
let happy = document.querySelector(".slide-show-container");
var btn = document.querySelector("#sad");
var btn1 = document.querySelector("#happy");
let currentIndex = 0;

var Interval;

btn.addEventListener("click", () => {
    Interval = setInterval(updateSlideShow, 3000);
    document.body.style.backgroundImage = "unset";
});

btn1.addEventListener("click", () => {
    clearInterval(Interval);
    document.body.style.backgroundImage = "url('./images/hpbd.jpg')";
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    btn1.style.display = "none";
    btn.style.display = "none";
})

function updateSlideShow() {
    currentIndex++;
    if (currentIndex > slideShow.length - 1) currentIndex = 0;
    for (let i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    slideShow[currentIndex].style.display = "block";
}