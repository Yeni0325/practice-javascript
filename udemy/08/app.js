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

// * 배열 추가 & 삭제 * 
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const popValue = hobbies.pop();
// hobbies.shift();    
// console.log(hobbies);
// console.log(popValue);

// hobbies[1] = 'Coding'
// //hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(0, 0, 'Good Food');
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.lastIndexOf(1.5, 4));
// console.log(testResults.includes(10.99));

// const personData = [{name : 'Max'}, {name : 'Manual'}];
// console.log(personData.indexOf({name : 'Manual'}));

// const manual = personData.find((person, idx, persons)=>{
//     return person.name === 'Manual';
// });

// manual.name = 'Anna';

// console.log(manual, personData);

// const maxIndex = personData.findIndex((person, idx, persons)=>{
//     return person.name === 'Max';
// });
// console.log(maxIndex);

// * forEach() * 
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index : idx, taxAdjPrice:price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// * Map *
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index : idx, taxAdjPrice:price * (1 + tax)};
    return priceObj;
});

//console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b)=>{
    if(a > b){
        return 1;
    } else if(a === b){
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices);

// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 6;
// });

const filteredArray = prices.filter(price => price > 6)

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// });

// console.log(sum);
// const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
//     return preValue + curValue;
// }, 0);
const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);
console.log(sum);