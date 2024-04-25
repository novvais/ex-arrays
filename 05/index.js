const original = [1, 4, 12, 21, 53, 88, 112];

let numerosPares = []

// for (let numerosPar = 0; numerosPar < original.length; numerosPar++) {
//     if (original[numerosPar] %2 == 0 ) {
//         numerosPares.push(original[numerosPar])
//     }
// }
//console.log(numerosPares)

for (let index of original) {
    if (index %2 == 0 ) {
        numerosPares.push(index)
    }
}
console.log(numerosPares)