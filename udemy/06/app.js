// const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for(const li of listItemElements){
//     console.log(li);
// }

// 가독성이 좋지 않음
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', ()=>{
    // if(section.className === 'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible'
    // }

    // classList
    // section.classList.toggle('visible');    // classList에서 자동으로 visible이 설정됐는지 확인 후 설정됐으면 삭제, 아니면 추가함
    section.classList.toggle('invisible');
});