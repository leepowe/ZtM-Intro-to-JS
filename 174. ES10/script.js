//.flat()
const array = [1, 2, 3, 4, 5];
console.log(array.flat());

const array2 = [1, [2, 3], [4, 5]];
console.log(array2);
console.log(array2.flat());

const array3 = [1, 2, [3, 4, [5]]];
console.log('nested:', array3);
console.log('flat:', array3.flat()); //only flattend one level

console.log('multi-flattened:', array3.flat(2)); //the variable tell it how many layer to flatten

const entries = ['bob', 'sally', , , , , , 'cindy'];
console.log(entries);
console.log(entries.flat()); //removed the empty entries

//flatMap

const array4 = [1, 2, [3, 4, [5]], 6, [7, 8, [9, 10], 11], 12, 13];
const jurassicArray = array4.flatMap(number => number + ' with T-Rex');
console.log(jurassicArray);

const userEmail = '    eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail       ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
console.log(Object.fromEntries(userProfiles));
const obj = Object.fromEntries(userProfiles);
console.log(Object.entries(obj));

//try catch block update
try {
    bob+'hi'
} catch { //don't have to use the error parameter
    console.log('you messed up')
}

//old way
try {
    bob + 'hi';
} catch (error) {
    console.log('you messed up' + error);
}