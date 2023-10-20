var database = [
    {
        username: "Lee", 
        password: "supersecret"
    },
    {
        username: "Sally", 
        password: "123"
    },
    {
        username: "ingrid", 
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "bobby timeline"
    },
    {
        username: "Sally",
        timeline: "sally timeline"
    },
    {
        username: "ingrid",
        timeline: "ingrid timeline"
    }
];

function isUserValid(username, password){
    for ( var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password combination");
    }
}

var userNamePrompt = prompt("What's your username: ");
var passwordPrompt = prompt("What's your password: ");

signIn(userNamePrompt, passwordPrompt);
