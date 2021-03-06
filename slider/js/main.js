let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");

let slides = document.querySelectorAll("li"); //array of li items
let slideIndex = 0;

let removeActive = (index) => slides[index].classList.remove("active");
let addActive = (index) => slides[index].classList.add("active");

function showSlide(direction) {
    return function () {
        let isNextEnabled = slideIndex < slides.length - 1;
        let isPrevEnabled = slideIndex > 0;
        let currentIndex = slideIndex;

        if (isNextEnabled && direction === "next") {
            slideIndex++;
        } else if (isPrevEnabled && direction === "previous") {
            slideIndex--;
        } else if (!isNextEnabled && direction === "next") {
            slideIndex = 0;
        } else if (!isPrevEnabled && direction === "previous") {
            slideIndex = slides.length - 1;
        }
        removeActive(currentIndex);
        addActive(slideIndex);
    };
}

nextBtn.onclick = showSlide("next");

previousBtn.onclick = showSlide("previous");
