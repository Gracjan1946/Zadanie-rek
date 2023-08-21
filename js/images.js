window.onload = () => {
    const grid = document.querySelector('.grid');
    let gutterValue;
    if(screen.width < 992){
        gutterValue = 10;
    }else{
        gutterValue = 20;
    }
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: gutterValue,
    });
}