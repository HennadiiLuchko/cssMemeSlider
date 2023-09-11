const dot = document.querySelectorAll('.dot');
const sliderLine = document.querySelector('.slider-line');
const descriptionLine = document.querySelectorAll('.description-line');
const slide = document.querySelectorAll('.slide');

Array.from(dot);
let sliderCount;
let width;

window.addEventListener('resize', Infinit);

Infinit();
function Infinit() {

    width = document.querySelector('.slider-wrapper').offsetWidth;
    sliderLine.style.width = width * slide.length + 'px';
    slide.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })

    rollSlider();
}

dot.forEach((element, index) => {
    
    element.addEventListener('click', () =>{
        
        sliderCount = index; 
        dot.forEach((dot) => {
            dot.classList.remove('active');
        })
        dot[sliderCount].classList.add('active');

        rollSlider();
    })

})

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + sliderCount * width + 'px)';
}