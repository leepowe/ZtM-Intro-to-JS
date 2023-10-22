// Dom Selectors  these commands are being used in the console
document.getElementsByTagName("h1");

document.getElementsByClassName("second")[0];

document.getElementById("first");

//Newer: use querySelector and querySelectorAll

document.querySelector("h1");

document.querySelector("li");

document.querySelectorAll("li");

document.querySelectorAll("h1, li");

document.querySelector("li").getAttribute("random");

document.querySelector("li").setAttribute("random", "1000");

// document.querySelector("h1").style.background = "yellow";

var h1 = document.querySelector("h1");
h1.className = "coolTitle";  //css by raphel castro via codepen

document.querySelector("li").classList;

document.querySelector("li").classList.add("coolTitle");

document.querySelector("li").classList.remove("coolTitle");

document.querySelector("li").classList.add("done");

document.querySelector("li").classList.toggle("done");

h1.innerHTML = "<strong>!!!!!</strong>";

document.querySelectorAll("li")[1];

document.querySelectorAll("li")[1].parentElement; //ul

document.querySelectorAll("li")[1].parentElement.parentElement; //body

document.querySelectorAll("li")[1].parentElement.parentElement.children; //body's children