const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

// create methods for next and prev clicks

const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    //remove the current class form the class list
    current.classList.remove('.current');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to that div
        current.nextElementSibling.classList.add('current');
    } else {
        //return current to firstchild
        slides[0].classList.add('current');
    }
    //set a delay
    setTimeout(() => current.classList.remove('current'));

}

const prevSlide = () => {
        // get current class
        const current = document.querySelector('.current');
        //remove the current class form the class list
        current.classList.remove('.current');
        //check for next slide
        if (current.previousElementSibling) {
            //add current to that div
            current.previousElementSibling.classList.add('current');
        } else {
            //return current to last
            slides[slides.length - 1].classList.add('current');
        }
        //set a delay
        setTimeout(() => current.classList.remove('current'));

    }
    // Button Events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//Config for auto sliding
if (auto) {
    //run next silde at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}