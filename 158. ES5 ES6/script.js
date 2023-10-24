// // let + const

// const playerOG = 'bobby'; //const value does not get reasigned 
// let experienceOG = 100; //let value can be changed
// let wizardLevelOG = false;

// if(experienceOG > 90){
//     let wizardLevelOG = true;
//     console.log('inside', wizardLevelOG);
// }

// console.log('outside', wizardLevelOG);

// //const objs can have their properties changed
// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// }

// obj.wizardLevelOG = true;

// console.log(obj);

// //Destructuring
// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false
// }

// const player2 = obj.player;
// const experience2 = obj.experience;
// let wizardLevel2 = obj.wizardLevel;

// const {player, experience} = obj;
// let {wizardLevel} = obj;

// //declaring object properties
// const name = 'john snow';

// const obj = {
//     [name]: 'hello',
//     ['ray' + 'smith']: 'hihi'
// }

// const a = 'Simon';
// const b = true;
// const c = {};

// const obj = {
//     a,
//     b, 
//     c
// }

// console.log(obj);

//Template Strings
const name = 'Sally';
const age = 34;
const pet = 'horse';

// const greeting = 'Hello ' + names + ' you seem to be doing ' + greeting + '!';
//becomes
const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;
}

console.log(greet('Sally', 30, 'cat'));

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//Arrow Functions

// function add(a, b) {
//     return a + b;
// }
//becomes
const add = (a, b)=> a + b; //single return (just assumes return after the arrow)

const add2 = (a, b)=>{
    return a + b;
}  // when you would have more than one return