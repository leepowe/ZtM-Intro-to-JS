const first = ()=> {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
// newFunc();

//Closures - a function ran. the function executed. It's never going to run again
//BUT it's going to remember that there are references to those variables.
//so the child scope always has access to the parent scope.
//Children can access parent but parent can't access children scopes.

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3);
// curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(11));

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);
//const compose = (f, g) => (a) => f(g(a));
//                                 f(g(5))
//                      g() = 5 + 1
//                                 f(6)
//                      f() = 6 + 1
//                      return 7
//                 compose = 7

//Avoiding side effects and functional purity
//console.log is a side effect

var a = 1;

function b() {
    a = 2;  //side effect (changes the outside world)
}

//functional purity (always returns something)
//the same input into a function always returns the same thing.