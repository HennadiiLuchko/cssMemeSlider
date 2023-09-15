const dot = document.querySelectorAll('.dot');
const dotWrapper = document.querySelectorAll('.dot-wrapper');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderDescription = document.querySelector('.slider-description');
const sliderLine = document.querySelector('.slider-line');
const descriptionLine = document.querySelector('.description-line');
const slide = document.querySelectorAll('.slide');
const description = document.querySelectorAll('.description');

Array.from(dot);
let sliderCount;
let widthSlider;
let widthDescription;

window.addEventListener('resize', infinit);

infinit();
function infinit() {

    widthSlider = sliderWrapper.offsetWidth;
    widthDescription = sliderDescription.offsetWidth;

    sliderWrapper.style.height = (55/100) * widthSlider + 'px';
    sliderLine.style.width = widthSlider * slide.length + 'px';
    descriptionLine.style.width = widthDescription * description.length + 'px';

    slide.forEach(item => {
        item.style.width = widthSlider + 'px';
        // item.style.height = 'auto';
        item.style.height = (55/100) * widthSlider + 'px';
    })

    description.forEach(item => {
        item.style.width = widthDescription + 'px';
        item.style.height = 'auto';
        // item.style.height = (65/100) * widthSlider + 'px';
    })

    rollSlider();
    rollDescription();
}

dotWrapper.forEach((element, index) => {
    
    element.addEventListener('click', () =>{
        
        sliderCount = index; 
        dot.forEach((dot) => {
            dot.classList.remove('active');
        })
        dot[sliderCount].classList.add('active');

        rollSlider();
        rollDescription();
    })

})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + sliderCount * widthSlider + 'px)';
}

function rollDescription() {
    descriptionLine.style.transform = 'translate(-' + sliderCount * widthDescription + 'px)';
}

dotWrapper.forEach((element, index) => {
    
    element.addEventListener('click', () =>{
        
        sliderCount = index; 
        dot.forEach((dot) => {
            dot.classList.remove('active');
        })
        dot[sliderCount].classList.add('active');

        rollSlider();
        rollDescription();
    })

})