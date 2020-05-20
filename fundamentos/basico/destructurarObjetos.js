// Desestructuracion de objetos

var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30
}

var dario = {
	nombre: 'Dario',
	apellido: 'Susnisky',
	edad: 27
}

function imprimirNombreEnMayusculas (persona) {
	// Destructurando el objeto persona
	var { nombre } = persona
	console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad ( persona ) {
	var { nombre, edad } = persona
	console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(byron)
imprimirNombreYEdad(dario)