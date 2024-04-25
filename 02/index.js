const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        contador++
    } else if (letra !== "E" && letra !== "e") {
        console.log("Não é uma letra e ou E")
    }
}
console.log("Foram encontradas ", contador, "letras e ou E")
