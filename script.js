function sayHello(){
    console.log("Hello");
}

sayHello();

var sayBye = function(){
    console.log("Bye");
}

sayBye();


function sing(){
    console.log("AHHHHHH");
    console.log("TEEEEEEE");
}

sing();



function sing2(song){
    console.log(song);
}

sing2("la de dah");


function multiply(a, b) {
    if(a > 10 || b > 10) {
        return "That's too hard";
    }else{
        return a*b;
    }
}