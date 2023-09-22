const arrayPrint  = [
          [5,10,12],
          [2,9,11],
          [15,8,6]
    ]

const arrayMaior10 = [];
 
arrayPrint.forEach(function(linha){
    linha.forEach(function(coluna){
    if (coluna >= 10) {
        arrayMaior10.push(coluna)
    }
})

})

console.log(arrayMaior10)

