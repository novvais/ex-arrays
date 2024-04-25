let numeros = [
    23, 53, 7, 27, 12, 4
]

let diferencaNum = 0
let numMaior = 0
let numMenor = numeros[0]


for (let contador = 0; contador < numeros.length; contador++) {
    if(numeros[contador] > numMaior) {
        numMaior = numeros[contador]
    } 
    if (numeros[contador] < numMenor) {
        numMenor = numeros[contador]
    }
    diferencaNum = numMaior - numMenor
}
console.log(diferencaNum)