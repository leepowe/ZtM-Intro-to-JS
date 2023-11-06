var a = 5;
// var b = 10;
var b = a;

b++;

console.log('a', a);
console.log('b', b);

let obj1 = { name: 'Yoa', password: '123' };
let obj2 = obj1;  //obj1 is the adress in memory of the object since it is not a primative type.  It's not a clone like with a string or int

obj2.password = 'easypeasy';

console.log('1', obj1);
console.log('2', obj2);

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(12312498734);

console.log('d', d);
console.log('c', c);

//to clone an array to another variable to be manipulated separately from the original
var d = [].concat(c);
d.push(777);
console.log('c', c);
console.log('new d', d);

//clone an object
let obj3 = { //cloned this level
    a: 'a',
    b: {
        deep: 'try and copy me' // but referenced the address of this level so did not keep this value (Shallow cloning)
    },
    c: 'c'
};
let obj4 = Object.assign({}, obj3);
let obj5 = { ...obj3 }; //CLEANER
//to deep clone use JSON
let superClone = JSON.parse(JSON.stringify(obj3)); //can affect performance in cloning large JSON files

obj3.c = 5;
obj3.b.deep = 'hahaha';
console.log('obj3', obj3);
console.log('obj4', obj4);
console.log('obj5', obj5);
console.log('superClone', superClone); //shows 'try and copy me' value for deep: