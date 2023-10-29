const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log('for each:', double);

//map, filter, reduce


//map
// const mapArray = array.map((num) => {
//     return num * 2;
// });
// re written to ...
const mapArray = array.map(num =>  num * 2); //cleaner

console.log('map:', mapArray);
//map creates a new array.  the original array remains the same.


//filter

const filterArray = array.filter(num => num > 5);
console.log('filter:', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0); //0 in this case is the accumulator or starting number

console.log('reduce:', reduceArray);