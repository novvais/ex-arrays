const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0

for (let index of numeros) {
    if (index %2 == 0 ) {
        soma += index
    }
}
console.log(soma)