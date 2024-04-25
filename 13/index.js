const disjuntores = [false, false, true, false, false, true, false, false];

for (let disjuntLigado = 0; disjuntLigado < disjuntores.length; disjuntLigado++) {
    if(disjuntores[disjuntLigado] === true) {
        console.log("Disjuntor", disjuntLigado, "está ligado!")
    }
}