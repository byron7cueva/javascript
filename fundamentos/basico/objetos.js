// Objeto literal
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

// Desglosar los atributos de un objeto
// No podemos desglosar un objeto que no estemos seguros que va contener
// los atributos que indicamos
function imprimirNombreEnMayusculas ({ nombre }) {
	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(byron)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
// La siguiente llamada dara error ya que no se indica un objeto
// con el atributo nombre
// imprimirNombreEnMayusculas()