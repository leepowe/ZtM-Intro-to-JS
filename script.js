var database = [
    {
        username: "lee", 
        password: "supersecret"
    }
];

var newsfeed = [
    {
        username: "bobby",
        timeline: "s"
    }, 
    {
        username: "sally", 
        timeline: "2"
    }
];

var userNamePrompt = prompt("What's your username: ");
var passwordPrompt = prompt("What's your password: ");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password!")
    }
}

signIn(userNamePrompt, passwordPrompt);