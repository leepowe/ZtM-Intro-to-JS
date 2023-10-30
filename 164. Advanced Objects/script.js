//referece type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value); //15
console.log(object3.value); //10

//context vs scope

// function b() {
//     let a = 4;
// }
console.log(this === window);
// this.alert('hello');
function a() {
    console.log(this);// window
}
window.a()

const object4 = {
    a: function () {
        console.log(this);
    }
}

object4.a()

//instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduct() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`Weeeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Wizard');