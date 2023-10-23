// var b = 'Can I access this?';

// console.log(b);

// function bb() {
//     var a = 'hello';
//     var b = 'hello b';
//     // console.log(a);
//     console.log(b);
// }

// bb();

//Root Scope (window)
var fun = 5;

// function funFunction(){
//     // child scope
//     var fun = 'hellooo';
//     console.log(1, fun);
// }

// function funnerFunction(){
//     // child scope
//     var fun = 'Byee';
//     console.log(2, fun);
// }

function funnestFunction(){
    // child scope
    // var fun = 'AHHHH';
    console.log(fun);
}

// console.log('window:', fun);
// funFunction();
// funnerFunction();
funnestFunction();
// console.log(fun);