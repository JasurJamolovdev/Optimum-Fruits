const menu = document.querySelector(".menu_wrapper");



function openMenu() {
    menu.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
}


// ------------------------------------------


const slider_1 = document.querySelector(".slider_1");
const slider_2 = document.querySelector(".slider_2");
const slider_3 = document.querySelector(".slider_3");

function slideShow_2() {
    slider_3.style.display = "none";
    slider_1.style.display = "none";
    slider_2.style.display = "block";
}

function slideShow_3() {
    slider_1.style.display = "none";
    slider_2.style.display = "none";
    slider_3.style.display = "block";
}

function slideShow_1() {
    slider_3.style.display = "none"
    slider_2.style.display = "none";
    slider_1.style.display = "block"
}

