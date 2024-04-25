const numeros = [54, 22, 14, 87, 10, 284];

let indice = 0

for (let numero of numeros) {
    indice++
    if (numero === 10) {
        console.log("O número 10 foi encontrado no indice ", indice - 1)
    } else if (numero !== 10) {
        console.log("Não é um número 10")
    }
}

