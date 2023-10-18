var todos = [
    "clean room", 
    "brush teeth",
    "excercise", 
    "study javascript", 
    "eat healthy"
];

// for (var i = 0; i < todos.length; i++){
//     todos[i] = todos[i] + "!";
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    console.log(i);
}

// todos.forEach(function(todo, i) {
//     console.log(todo, i);
// })

var importantTodos = [
    "clean room!", 
    "brush teeth!",
    "excercise!", 
    "study javascript!", 
    "eat healthy!"
];

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
importantTodos.forEach(logTodos);