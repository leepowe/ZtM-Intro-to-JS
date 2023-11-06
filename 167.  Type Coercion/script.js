// 1 == '1'; becomes...
1 == 1;
console.log(1 == '1'); //true, not predictable, shouldn't really use
console.log(1 === '1'); //false, really always use ===
if (1) {
    // return 5; return only used if there is a function being run
    console.log(5);
}

console.log('-+0', -0 === +0); //true
console.log('-+0 Object.is:', Object.is(-0, +0)); //false


console.log('NaN ===:', NaN === NaN);
console.log('NaN Object.is:', Object.is(NaN, NaN));