const a = 1;
const b = 10;
const c = 100;

console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

//-------------------------------

// console.log('4');
// two();
// one();
//call stack goes up the chain to line 18 and then pops the calls going back down the chain.
//CALL STACK (first in last out)
//call one();, call two(); inside of one() stack it on top, call console.log('4'); inside of two stack it on top. console.log 4. Pop console.log('4'); then down to pop two(); then down to pop one(); thus clearing the stack for the call.

//JS is single threaded and non-blocking (one call stack at a time)

//Synchronis programming goes line one then two then three....

//Stack Overflow

function foo() {
    foo();
}
// foo();

//ASYNC
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000) //skipped this call for 2 seconds and went on to process all the calls it could in that 2 seconds
console.log('3');

//CALL STACK


//WEB API


//CALLBACK QUEUE


//EVENT LOOP
