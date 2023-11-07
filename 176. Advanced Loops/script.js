//Loops
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5, 
    oranges: 10, 
    grapes: 1000,
}

//for
console.log('for');
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

//forEach
console.log('forEach');
basket.forEach(item => {
    console.log(item);
});

//for of (for strings and arrays)
//Iterating
console.log('for of');
for (item of basket) {
    console.log(item);
}

//for in (for object properties)
//Enumerating
console.log('for in');
for (item in detailedBasket) {
    console.log(item);
}