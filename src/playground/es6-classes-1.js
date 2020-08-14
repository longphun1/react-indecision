class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age
    }
    getGreetting() {
        return `Hi. I am ${ this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    hasHome(){
        return !!this.home;
    }
    getGreetting(){
        let greeting = super.getGreetting();

        if(this.hasHome()) {
            greeting += ` My home town is ${this.home}.`
        }
        else {
            return greeting;
        }
        
        return greeting;
    }
}

const me = new Traveler('Long Phun', 22, 'San Gabriel');
console.log(me.getGreetting());