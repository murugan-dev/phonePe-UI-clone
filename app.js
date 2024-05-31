const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const ul = document.querySelector("header ul");

openMenu.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
    ul.classList.remove("close");
    ul.classList.add("open");
});

closeMenu.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    ul.classList.remove("open");
    ul.classList.add("close");
});
