const numeros = [3, 24, 1, 8, 11, 7, 15];

let numMaior = 0

for (let contador = 0; contador < numeros.length; contador++) {
    if(numeros[contador] > numMaior) {
        numMaior = numeros[contador]
    }
}
console.log(numMaior)