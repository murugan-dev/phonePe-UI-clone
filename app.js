const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark")
const ul = document.querySelector("header ul");

open.addEventListener("click", (e)=>{
    ul.classList.add("toggle"); 
})

close.addEventListener("click", (e)=>{
    ul.classList.remove("toggle");
})

const sliders = document.querySelectorAll(".slider-item");
const dotContainer = document.querySelector(".dots");
let sliderPosition = 0;
const lengthOfSlider = sliders.length;
const delay = 5000; 

let startX = 0;
let endX = 0;

sliders.forEach((item, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot-style");
    dotContainer.appendChild(dot);

    dot.addEventListener("click", () => {
        sliderPosition = index;
        moveSlider();
    });

    item.addEventListener("touchstart", handleTouchStart);
    item.addEventListener("touchmove", handleTouchMove);
    item.addEventListener("touchend", handleTouchEnd);
});

const dots = document.querySelectorAll(".dot-style");

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX > endX + 50) {
        sliderPosition++;
        if (sliderPosition >= lengthOfSlider) {
            sliderPosition = 0;
        }
        moveSlider();
    } else if (startX < endX - 50) {
        sliderPosition--;
        if (sliderPosition < 0) {
            sliderPosition = lengthOfSlider - 1;
        }
        moveSlider();
    }
}

function moveSlider() {
    sliders.forEach((slider, index) => {
        slider.classList.add("hidden");
        dots[index].classList.remove("active-dot");
    });

    sliders[sliderPosition].classList.remove("hidden");
    dots[sliderPosition].classList.add("active-dot");
}

function initSlider() {
    sliders[0].classList.remove("hidden");
    dots[0].classList.add("active-dot");
}


setInterval(() => {
    sliderPosition++;
    if (sliderPosition >= lengthOfSlider) {
        sliderPosition = 0;
    }
    moveSlider();
}, delay);

initSlider();




