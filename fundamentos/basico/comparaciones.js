var x = 4, y = '4'

// Los pasa a un mismo tipo de dato y compara su valor
console.log(x == y)

// Para comparar si son el mismo valor y son del mismo tipo de dato
// Siempre se debe utilizar el triple igual
console.log(x === y)

// Comparando objetos
var byron = {
	nombre: 'Byron'
}

var otraPersona = {
	nombre: 'Byron'
}

// Tanto con el doble y triple igual compara referencias
console.log(byron == otraPersona)
console.log(byron === otraPersona)

var segundaPersona = byron
console.log(byron == segundaPersona)
console.log(byron === segundaPersona)

// Creando otro objeto a partir de otro
var tercerPersona = {
	...byron
}
console.log(byron == tercerPersona)
console.log(byron === tercerPersona)