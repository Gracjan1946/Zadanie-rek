const images = document.querySelectorAll('.grid-item img');
const popup = document.querySelector('.realizacje_popup');
const popupImage = document.querySelector('.realizacje_popup img');
const exitIcon = document.querySelector('.realizacje_exit');
const leftArrow = document.querySelector('.realizacje_popup .fa-arrow-left')
const rightArrow = document.querySelector('.realizacje_popup .fa-arrow-right')

let indexOfImage = 0;

const imagePopup = (image, index) => {

popup.classList.add('realizacje_popup-active')
indexOfImage = index;
desibleScroll();
changeSrc(image);

}

const changeSrc = (image) => {

    if(indexOfImage === 0){
        leftArrow.classList.add('realizacje_arrow-disable');
    }else if(indexOfImage === images.length -1){
        rightArrow.classList.add('realizacje_arrow-disable');
    }else{
        leftArrow.classList.remove('realizacje_arrow-disable');
        rightArrow.classList.remove('realizacje_arrow-disable');
    }

    popupImage.src = image.getAttribute('src');

}

const searchImage = (index) => {

    images.forEach((img , index) => {
        if(index === indexOfImage){
            changeSrc(img)
        }
    })

}

const changeImage = (direction) => {

    if(direction == 'left'){
        indexOfImage--;
        searchImage(indexOfImage);
    }else if(direction == 'right'){
        indexOfImage++;
        searchImage(indexOfImage);
    }

}

const desibleScroll = () => {

    TopScroll = document.documentElement.scrollTop;
    LeftScroll = document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
    };

}


images.forEach((image, index) => {
    image.addEventListener('click', () => imagePopup(image, index))
});

exitIcon.addEventListener('click', () => {
    popup.classList.remove('realizacje_popup-active')
    window.onscroll = function() {};

})

leftArrow.addEventListener('click', () => changeImage('left'));
rightArrow.addEventListener('click', () => changeImage('right'));