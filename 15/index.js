const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let numOriginal of original) {
    if(numOriginal %2 == 0) {
        pares.push(numOriginal)
    } else {
        impares.push(numOriginal)
    }
}

console.log(`Numeros pares ${pares}`)
console.log(`Numeros impares ${impares}`)
