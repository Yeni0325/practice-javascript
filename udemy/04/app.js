// var name = 'Max';
// if (name === 'Max'){
    // var hobbies = ['Sports, Cooking'];
    //console.log(hobbies);
// }

// function greet(){
    // var age = 30;
    // var name = 'Manuel'
    // console.log(name, age);
// }
// console.log(name, hobbies);

// greet();

// "use strict";

// const userName = 'Max';
// let undefined = 5;

// console.log(userName);

function getName(){
    return prompt('Your name : ', '');
}

function greet(){
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();