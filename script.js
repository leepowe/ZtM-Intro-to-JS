var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

var numbers = [1, 2, 3, 4];
var booleans = [true, false, true];
var functions = [function apple(){console.log("apple");}];

console.log(functions);

//not to be used
var mixedList = ["apples", 3, undefined, true, function apple(){console.log("apples");}];

var list = [
    ["tiger", "cat", "bear", "bird"]
];

console.log(list[0][2]);

var list = ["tiger", "cat", "bear", "bird"];


list.shift();
console.log(list);
list.pop();
console.log(list);
list.push("elephant");
console.log(list);
var newList = list.concat(["bee", "deer"]);
console.log(newList);
newList.sort();
console.log(newList);