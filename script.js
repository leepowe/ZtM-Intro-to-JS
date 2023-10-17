var user = {
    name: "John", 
    age: 34,
    hobby: "Soccer", 
    isMarried: false,
    spells: ["abarakadabara", "shazam", "boo"],
    shout: function() {
        console.log("AHHHHHH!");
    }
};

//Adding a property to an object

user.favoriteFood = "pizza";

console.log(user);

//changing values

user.isMarried = true;

console.log(user);

//Objects in an array
var list = [
    {
        username: "andy", 
        password: "secret"
    },
    {
        username: "jess", 
        password: "123"
    }
];

console.log(user.spells[1]);
console.log(list[0].password);
console.log(user.shout());

user2 = {};

console.log(user2);

list2 = [];

console.log(list2);