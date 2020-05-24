// Cuando se inicia la siguiente linea con un array, es necesario el punto y coma
console.log('Hola esto es una prueba')
;[1, 2, 3].forEach(item => console.log(item))

// Necesita de ; cuando se utiliza una cadena template
const nombre = 'Luis'
;`Hola ${nombre} como estas`
console.log('Este es otro mensaje')

function calcularDoble (numero) {
	// Si despues del return se da un salto, da un error
	return {
		original: numero, doble: numero * 2
	}
}

console.log(calcularDoble(2))