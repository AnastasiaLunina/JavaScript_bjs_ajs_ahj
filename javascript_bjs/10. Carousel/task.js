const back = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

const photosArray = Array.from(document.querySelectorAll(".slider__item"));
const dotsArray = Array.from(document.querySelectorAll(".slider__dot"));

let currentSlide = 1;

function removeActive() {
    photosArray[currentSlide].className = "slider__item";
}

function addActive() {
    photosArray[currentSlide].className = "slider__item_active";
}

next.onclick = function() {
    removeActive();
    currentSlide++;

    if (currentSlide > photosArray.length - 1) {
        currentSlide = 0;
    }
    addActive();
};

back.onclick = function() {
    removeActive();
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = photosArray.length - 1;
    }
    addActive();
};