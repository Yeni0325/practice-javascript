
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