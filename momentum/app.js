
// 01. constant (상수) & let

const a = 5;
const b = 2;
// const myName = "yeeun";
let myName = "yeeun";
const veryLongVariableName = 0; // camel case

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "kimYeeun";    //  Assignment to constant variable.

console.log("your new name is " + myName);

// ===============================================================

// 02. Boolean
const amIFat = true;
console.log(amIFat);

// ===============================================================

// 03. Null : 아무것도 없음
const test = null;
console.log(test);

// ===============================================================

// 04. undefined : 정의되지않음
const fined = null;     // 값은 있는데 아무것도 아닌 것
console.log(fined);

let something;          // 변수는 있지만 정의하지 않음. 공간은 있는데 값이 존재하지 않음
console.log(something); // undefined

// ===============================================================

// 05. Array (배열)
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the Array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[2]);

// ===============================================================

// 06. Objects

const playerName = "yeeun";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// player Array
// const player = ["yeeun", 121212, true, "little bit"];   
// => Array는 각각의 항목이 무슨 의미인지 알려주고 있지 않아 적합하지 않음

const player = {
    name : "yeeun",
    points : 10,
    handsome : true,
    fat : "little bit",
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = false;
console.log(player);

// const는 수정할 수 없다고 했는데??  
// const 안의 무언가를 수정하는 것은 상관없다. but const로 선언된 Object를 수정하려고 하면 오류가 발생!

// const안에 무언가를 추가하게 되면 어떻게 될까?
player.lastName = "potato";
console.log(player);

// * Object에서 값 가져오기
console.log(player.points);

// * Object 값 수정하기
console.log(player.points = player.points + 15);

// * Obeject 값 추가하기
player.color = "red";
console.log(player);

// ===============================================================

// 07. function : 반복해서 사용할 수 있는 코드 조각
 
function sayHello(nameOfPerson, age){
    console.log("Hello!! my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 38);
sayHello("dal", 12);
sayHello("yeeun", 29);

function plus(a, b){
    // console.log(a+b); // NaN (Not a Number, 숫자가 아님)
    console.log(a+b);
}
function divide(a,b){
    console.log(a/b);
}

plus(8, 60);
divide(98,20);

const player2 = {
    name : "nico",
    sayHello : function(otherPersonName){
        console.log("hello!!! " + otherPersonName + " nice to meet you!");
    },
};

console.log(player2.name);
player2.sayHello("lynn");

// ===============================================================

/*
    항상 const를 사용하고, 가끔 let 을 사용 ! var는 절대 사용하지 말 것!
*/

// ===============================================================

// 과제

const calculator = {
    add : function(a, b){
        return a + b;
    } , 
    minus : function(a, b){
        return a - b;
    }, 
    divide : function(a, b){
        return a / b;
    },
    powerof : function(a, b){
        return a ** b;
    }

}

const plusResult = calculator.add(1, 1);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(8, minusResult);
const powerofResult = calculator.powerof(divideResult, minusResult);

// console.log는 원하는 데이터를 화면에 뿌려주는 등의 결과를 보여주지 않는다. 즉, 나에게 값을 제공해주지 않는다. 
// console.log는 콘솔에 결과를 보여주기 위함이다. 

const age = 96;
function calculatorKrAge(ageOffForeigner){
    return ageOffForeigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);

// 한번 return 하면 function은 작동을 멈추고 결과값을 return한다!

// ===============================================================

// 08. conditionals(조건문)

// "15" -> 15 (String -> Integer)
// parseInt()

const age2 = parseInt(prompt("How old are you?"));

// isNaN() : Not a number의 결과값을 boolean값으로 반환 (숫자인 경우, false를 반환 / 문자인 경우, true를 반환)

/*
console.log(isNaN(age2));

if(isNaN(age2)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}
*/

if(isNaN(age2)){
    console.log("Please write a number");
} else if(age2 < 18){
    console.log("You are too young");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else {
    console.log("You can't drink");
}

// 조건문안에서 사용가능한 것들 &&, ||, >=, <, ===, !==

if((a && b) || (a && b) || (x || y)){

}



