const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let contador = 0; contador < arrayA.length; contador++) {
   if(arrayA[contador] < arrayB[contador]) {
        console.log(arrayA[contador])
    } else {
        console.log(arrayB[contador])
    }
}
