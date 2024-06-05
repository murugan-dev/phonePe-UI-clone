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


// accordin

const accordinCollection = document.querySelectorAll(".accordin-condainer .accordin");
const openAccordin = document.querySelectorAll(".accordin .fa-chevron-right");
const closeAccordin = document.querySelectorAll(".fa-angle-down");
const list = document.querySelectorAll(".accordin-list")
// console.log(accordinCollection)

let accIndex;

openAccordin.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        accIndex = index;
        list.forEach((listItem, idx)=>{
            if(accIndex == idx){
                openAccordin[idx].style.display = "none";
                closeAccordin[idx].style.display = "block";
                list[idx].style.display = "block";
            }
            else{
                openAccordin[idx].style.display = "block";
                closeAccordin[idx].style.display = "none";
                list[idx].style.display = "none";
                
            }
        })         
    })
})


// console.log(openAccordin, closeAccordin)
// accordinCollection.forEach((item, index)=>{
//     item.addEventListener("click", (e)=>{ 
//         accIndex = index;         
//         list.forEach((item, index)=>{
//             if(accIndex == index){
//                 item.style.display = "block";
//                 item.classList.add("open-footer-menu");
//                 openAccordin.style.display = "none";
//                 closeAccordian.style.display = "grid";
//                 console.log("if working");
//             }else{
//                 // item.classList.remove("open-footer-menu");
//                 item.style.display = "none";
//                 openAccordin.style.display = "none";
//                 closeAccordian.style.display = "grid";
//                 console.log("Else block not working")
//             }
//         })    
//         console.log(item)
//     })
// })

// const accordinCollection = document.querySelectorAll(".accordin-condainer .accordin");
// const list = document.querySelectorAll(".accordin-list");
// console.log(accordinCollection);

// Function to reset all accordions
// function resetAccordions() {
//     list.forEach((item) => {
//         item.style.display = "none";
//         item.classList.remove("open-footer-menu");
//     });
//     document.querySelectorAll(".fa-chevron-right").forEach((icon) => icon.style.display = "block");
//     document.querySelectorAll(".fa-angle-down").forEach((icon) => icon.style.display = "none");
// }

// accordinCollection.forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//         // Reset all accordions
//         resetAccordions();

//         // Toggle the clicked accordion
//         const listItem = list[index];
//         const openIcon = item.querySelector(".fa-chevron-right");
//         const closeIcon = item.querySelector(".fa-angle-down");

//         if (listItem.style.display === "block") {
//             listItem.style.display = "none";
//             listItem.classList.remove("open-footer-menu");
//             openIcon.style.display = "block";
//             closeIcon.style.display = "none";
//         } else {
//             listItem.style.display = "block";
//             listItem.classList.add("open-footer-menu");
//             openIcon.style.display = "none";
//             closeIcon.style.display = "block";
//         }
//         console.log(item);
//     });
// });



