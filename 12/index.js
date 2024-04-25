const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let index of filaDeDentro) {
    if(filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora.shift())
        console.log(filaDeDentro)
    } else {
        console.log("O banco está cheio!")
    }
}