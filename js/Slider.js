const leftArrowSlider = document.querySelector('.intro_slajder-arrow-left');
const rightArrowSlider = document.querySelector('.intro_slajder-arrow-right');
const Slides = document.querySelectorAll('.intro_slide-container');
let currentSlideIndex = 0;


const ChangeSlide = (direction) => {
    if(direction){

        if(currentSlideIndex === 0){
            currentSlideIndex = Slides.length - 1;
        }else{
            currentSlideIndex -= 1;
        }

    }else{

        if(currentSlideIndex === Slides.length - 1){
            currentSlideIndex = 0;
        }else{
            currentSlideIndex++;
        }

    }
    
    changeTransform(currentSlideIndex);
}

const changeTransform = (number) => {
    Slides.forEach(slide => {
        slide.style.transform = `translateX(-${number * 100}%)`
    })
}

leftArrowSlider.addEventListener('click', () =>ChangeSlide(true));
rightArrowSlider.addEventListener('click', () =>  ChangeSlide(false));