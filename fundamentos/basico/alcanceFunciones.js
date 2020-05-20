// Variables de nivel global
// Se asigna a window en el browser
// Se asigna a global en node
var nombre = 'Byron'

function imprimirNombreMayusculas (nombre) {
	// los parametros tiene un alcance local
	// Solo existe dentro de esta funcion
	// Se copia el valor de la variable pasada a al parametro, sin modificar
	// la variable local
	nombre = nombre.toUpperCase()
	console.log(nombre)

	// Si se quiere acceder a la variable de alcance global
	// Se debe utilizar el objeto global
}

imprimirNombreMayusculas(nombre)
console.log(nombre)