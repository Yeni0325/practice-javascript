// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array();    // 생성자 함수를 이용한 배열 생성
// console.log(moreNumbers);

// const moreNumbers2 = new Array('Hi', 'Welcome!');  
// console.log(moreNumbers2);

// const moreNumbers3 = new Array(45);   
// console.log(moreNumbers3);

// const moreNumbers4 = new Array(4, 5);    
// console.log(moreNumbers4);

// const moreNumbers5 = Array(1, 2, 3);    
// console.log(moreNumbers5);

// const yerMoreNumbers = Array.of(1, 2);
// console.log(yerMoreNumbers);

// const listItem = document.querySelectorAll('li');   // NodeList : 유사배열 객체
// console.log(listItem);

// const arrayListItem = Array.from(listItem);
// console.log(arrayListItem); 

// const hobbies = ['Sports', 'Cooking'];
// const personData = [30, 'Max', {moreDetail : []}];

// const analyticsData = [[1, 1, 6], [-5, 3, 2.1]];

// for(const data of analyticsData){
//     for(const dataPoint of data){
//         console.log(dataPoint);
//     }
// }

// console.log(personData[2]);

// 배열 추가 & 삭제
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const popValue = hobbies.pop();
hobbies.shift();    
console.log(hobbies);
console.log(popValue);

hobbies[1] = 'Coding'
//hobbies[5] = 'Reading';
console.log(hobbies, hobbies[4]);

// hobbies.splice(0, 0, 'Good Food');
// console.log(hobbies);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

hobbies.splice(-2, 1);
console.log(hobbies);