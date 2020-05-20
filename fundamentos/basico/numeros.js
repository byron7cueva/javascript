var edad = 27

edad += 1

console.log('Edad', edad)

var peso = 75

peso -= 2

console.log('Peso', peso)

var precioVino = 200.3
var total = precioVino * 3
// JavaScript tiene problemas en la forma de guardar decimales
// En este caso depende del numero de decimales
// En este caso ya que es solo un decimal
var totalCorrecto = precioVino * 100 * 3 / 100
console.log(total)
console.log(totalCorrecto)

// De la siguiente manera se hace mas preciso el calculo
var totalFinal = Math.round(precioVino * 100 * 3) / 100
console.log('Total correcto', totalFinal)

// Si queremos indicar que tiene dos decimales
// Esto me devuelve un string
var totalStr = totalFinal.toFixed(2)
console.log('Total con 2 decimales', totalStr)

// Pasando nuevamente a decimal
var aDecimal = parseFloat(totalStr)
console.log(aDecimal)

