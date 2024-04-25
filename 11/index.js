const original = [5, 7, 13, 17, 26, 34, 118, 245];

let numOriginais = []

for (let index of original) {
    if (index >= 10 && index <= 20 || index >= 100) {
        numOriginais.push(index)
    }
}

console.log(numOriginais)