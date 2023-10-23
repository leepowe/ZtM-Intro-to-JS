// var button = document.getElementsByTagName('button')[0];

// button.addEventListener("click", function() {
//     console.log("splat!");
// })

// button.addEventListener("mouseenter", function() {
//     console.log("squeek");
// })

// button.addEventListener("mouseleave", function() {
//     console.log("*silence*");
// })

var enterBtn = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

//refactoring
function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeydown(event) {
    if (inputLength() > 0 && event.key === 'Enter') {
        createListElement();
    }
}

enterBtn.addEventListener('click', addListAfterClick);

input.addEventListener('keydown',  addListAfterKeydown);