var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.createElement("button");

randBtn.textContent = 'Random Colors';
document.body.appendChild(randBtn);

setGradient();

function setGradient(){
    body.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for ( var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

randBtn.addEventListener('click', function() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
})