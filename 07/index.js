const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesA = []

for (let nomesComA of nomes) {
    if (nomesComA[0] === "A" || nomesComA[0] === "a") {
        nomesA.push(nomesComA)
    }
}

console.log(nomesA)