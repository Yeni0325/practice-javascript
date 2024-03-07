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
        super();
        this.age = 30;
     }

     greet(){
         console.log('Hi. I am ' + this.name + ' and I Aam ' + this.age + ' years old.');
     }
}

// -------------------------------------------------------------------------------

function Person(){
    this.age = 30;
    this.name = 'Max';
    //return this;
}

Person.prototype.greet = function(){
    console.log(
        'Hi. I am ' + this.name + ' and I Aam ' + this.age + ' years old.'
    );
};



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

const p = new Person();
const p2 = new Person();


// prototype c
// p   __proto__ c -> a
// prototype a
// p2  __proto__ a

console.log(p.__proto__ === p2.__proto__);