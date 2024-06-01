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
let sliderPosition = 0;
const lengthOfSlider = sliders.length;
const delay = 90000; 

// function moveSlider() {
//     sliders.forEach(slider => slider.classList.add("hidden"));
//     sliders[sliderPosition].classList.remove("hidden");
//     sliderPosition++;
//     if (sliderPosition >= lengthOfSlider) {
//         sliderPosition = 0;
//     }
// }

// setInterval(moveSlider, delay);

// moveSlider();
sliders[3].classList.remove("hidden");
