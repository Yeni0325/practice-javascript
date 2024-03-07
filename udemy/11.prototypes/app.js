class Person {
    name = 'Max';

    constructor(){
        this.age = 30;
    }

    greet(){
        console.log('Hi. I am ' + this.name + ' and I Aam ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();