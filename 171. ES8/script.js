// .padStart();
// .padEnd();
console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,);

Object.values
Object.entries
Object.keys //old

let obj = {
    userName0: 'Santa', 
    userName1: 'Rudolf', 
    userName2: 'Mr. Grinch'
}

//old example
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

//values
Object.values(obj).forEach(value => {
    console.log(value);
})

//entries
Object.entries(obj).forEach(value => {
    console.log(value);
})

console.log(
    Object.entries(obj).map(value => {
        return value[1] + value[0].replace('userName', '');
    })
);