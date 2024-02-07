const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
function handleButtonClick(){
    const username = loginInput.value;
    if(username === ""){
        console.log("Please write your name.");
    } else if (username.length > 15){
        console.log("Your name is too long!!");
    }  
}

loginButton.addEventListener("click", handleButtonClick);
*/

function onLoginSubmit(event){
    // Event 함수의 첫번째 인자는 무조건 현재 일어난 이벤트에 대한 정보를 담고 있음!!
    //event.preventDefault(); // 어떤 event의 기본행동이 일어나지 않도록 막음
    //const username = loginInput.value;
    //console.log(loginInput.value);

    // 브라우저는 엔터를 누를 때 새로고침 하고 form을 submit 하도록 되어있음.
    // 여기서 해야할 일은 이 기본동작이 발생하지 않도록 하는 것!

    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // 로그인 시 유저이름 저장하기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);  

    // localStorge에 유저명이 존재할 경우, form 숨기기
}


function hadleLinkClick(event){
    event.preventDefault();
    console.dir(event)
}

link.addEventListener("click", hadleLinkClick);

// form을 보여주기 전, addEventListener를 하기 전, localStorage에 유저명이 존재하는지 확인 (유저 정보 확인)

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);   
}

