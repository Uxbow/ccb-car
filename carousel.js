let rightBtn = document.querySelector('.control-right');
let leftBtn = document.querySelector('.control-left');
let fullCarousel = document.querySelector('.carousel-list');

let fullCarouselWidth = fullCarousel.offsetWidth;
let carouselWindow = document.querySelector('.carousel-visible').offsetWidth;
let totalSlidesCount = document.querySelectorAll('.carousel-item').length - 1;

localStorage.setItem('slidePosition', 0);


rightBtn.addEventListener('click',()=>{
    let position = localStorage.getItem('slidePosition');
    let nextPosition = +position + 1;
    let transformationValue = nextPosition * carouselWindow;
    if(leftBtn.getAttribute('disabled')==='') leftBtn.removeAttribute('disabled');
    if(position < totalSlidesCount){
        fullCarousel.style.transform = `translateX( -${transformationValue}px )`;
        localStorage.setItem('slidePosition', nextPosition);
        nextPosition === totalSlidesCount && rightBtn.setAttribute('disabled','');
    }
})


leftBtn.addEventListener('click',()=>{
    console.log('click');
    let position = localStorage.getItem('slidePosition');
    let nextPosition = +position - 1;
    let transformationValue = nextPosition * carouselWindow;
    console.log(position, nextPosition,transformationValue);
    if(rightBtn.getAttribute('disabled')==='') rightBtn.removeAttribute('disabled');   
    if(position > 0){
        fullCarousel.style.transform = `translateX( -${transformationValue}px )`;
        localStorage.setItem('slidePosition', nextPosition);
        nextPosition === 0 && leftBtn.setAttribute('disabled','');
    }
})

