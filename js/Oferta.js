const btn = document.querySelector('.realizacje_btn');
const section = document.querySelector('#realizacje');
const shadow = document.querySelector('.realizacje_shadow')
let flag = true;

const btnClick = () => {

section.classList.toggle('realizacje_full-height');
shadow.classList.toggle('realizacje_shadow-off');
if(flag === true){
    flag = false;    
    let arrow = document.createElement("i");
    arrow.classList.add('fa-solid', 'fa-arrow-up')
    btn.classList.remove('bounce-top')
    btn.textContent = `Zwiń `;
    btn.appendChild(arrow);
}else{
    flag = true;
    let arrow = document.createElement("i");
    arrow.classList.add('fa-solid', 'fa-arrow-down')
    btn.classList.add('bounce-top');
    btn.textContent = `Rozwiń `;
    btn.appendChild(arrow);
}

}

btn.addEventListener('click', btnClick);