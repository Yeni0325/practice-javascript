const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

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
    event.preventDefault(); // 어떤 event의 기본행동이 일어나지 않도록 막음
    //const username = loginInput.value;
    console.log(loginInput.value);

    // 브라우저는 엔터를 누를 때 새로고침 하고 form을 submit 하도록 되어있음.
    // 여기서 해야할 일은 이 기본동작이 발생하지 않도록 하는 것!
}

loginForm.addEventListener("submit", onLoginSubmit);

function hadleLinkClick(event){
    event.preventDefault();
    console.dir(event)
}

link.addEventListener("click", hadleLinkClick);

