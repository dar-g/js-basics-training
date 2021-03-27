let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");

let slides = document.querySelectorAll("li");
let slideIndex = 0;

let sliderList = document.getElementById("sliderList");
let shiftNum = 500;
let listShift = 0;

function getCurrentShift (currentShift, direction) {
    return direction === 'next' ? currentShift - shiftNum : currentShift + shiftNum;
}

function showSlide (direction) {
    return function () {
        let isNextEnabled = slideIndex < slides.length - 1;
        let isPrevEnabled = slideIndex > 0;

        let isFirstSlide = slideIndex === 0;
        let isLastSlide = slideIndex === slides.length - 1;

        let currentIndex = slideIndex;

        listShift = getCurrentShift(listShift, direction);

        sliderList.style.transform = 'translateX(' + listShift + 'px)';

        if (isNextEnabled && direction === "next") {
            slideIndex++;
            console.log('clicking next, index:', slideIndex);
        } else if (isPrevEnabled && direction === "previous") {
            slideIndex--;
            console.log('clicking prev, index:', slideIndex);
        } else if (!isNextEnabled && direction === "next") {
            slideIndex = 0;
        } else if (!isPrevEnabled && direction === "previous") {
            slideIndex = slides.length - 1;
        }

        if (slideIndex === 0) {
            previousBtn.setAttribute('disabled', '');
        } else if (slideIndex > 0 && slideIndex !== slides.length - 1) {
            previousBtn.removeAttribute('disabled');
            nextBtn.removeAttribute('disabled');
        } else if (slideIndex === slides.length - 1) {
            nextBtn.setAttribute('disabled', '');
        }
    };
}

nextBtn.onclick = showSlide("next");

previousBtn.onclick = showSlide("previous");
