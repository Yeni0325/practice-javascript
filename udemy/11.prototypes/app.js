 class AgedPerson{
    constructor(){
        console.log(this.name);
    }

    prntAge(){
        consolelog(this.age);
    }
 }
 
 class Person{
     name = 'Max';  

     constructor(){
        // super();
        this.age = 30;
        // this.greet = function(){...}
    }

    greet = () => {
        console.log('Hi. I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }

    //  greet(){
    //      console.log('Hi. I am ' + this.name + ' and I Am ' + this.age + ' years old.');
    //  }
}

// -------------------------------------------------------------------------------

// function Person(){
//     this.age = 30;
//     this.name = 'Max';
//     //return this;
// }

// Person.prototype.greet = function(){
//     console.log(
//         'Hi. I am ' + this.name + ' and I Aam ' + this.age + ' years old.'
//     );
// };

// Person.describe = function(){
//     console.log('Creating persons...');
// }

//Person.prototype = {
    //pringAge() {
        //console.log(this.age);
        //}
        //}
        
        
// Person.prototype.pringAge = function(){
//     console.log(this.age);
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.pringAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = p.__proto__.constructor();
// console.log(Object);

// const p = new Person();
// const p2 = new Person();

// prototype c
// p   __proto__ c -> a
// prototype a
// p2  __proto__ a
// p.greet();
// console.log(p);
// console.log(p.__proto__ === p2.__proto__);

// const button = document.addEventListener('click', p.greet);

const course = {    // new Object
    title : 'javaScript - The Complete Guide',
    rating : 5 
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course) , // 기존 프로토타입을 유지하고 싶을 때 
    printRating : function(){
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress : function(){
        console.log(this.progress);
    }
}, {
    name : {
        configurable : true ,
        enumerable : true , 
        value : 'Max' ,
        writable : true
    }
});

// student.name = 'Max';
Object.defineProperty(student, 'progress', {
    configurable : true ,
    enumerable : true , 
    value : 0.8 ,
    writable : false
});

student.printProgress();

console.log(student);

course.printRating();