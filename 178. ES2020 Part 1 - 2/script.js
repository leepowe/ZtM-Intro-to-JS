//BigInt
console.log(Number.MAX_SAFE_INTEGER + 1); //9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 10); //9007199254741000
console.log(9007199254741000 - 1); //9007199254741000 number did not change
console.log(9007199254741000n - 1n); //9007199254740999n

//Optional Chaining Operator "?."
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon', 
        height: 0.4, 
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon', 
        height: 0.8, 
        weight: 30
    }
}

// let weight = will_pokemon.pikachu.weight
// console.log('weight:', weight);
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
} else {
    let weight2 = undefined;
}



// let weight2 = andrei_pokemon.raichu.weight
// console.log('weight:', weight);

let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3);