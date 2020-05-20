var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30
}

// Los objetos se pasan por referencia
function cumpleanos ( persona ) {
	persona.edad += 1
}

function cumpleanosCopia ( persona ) {
	// Sacando una copia con los mismo valores
	// Pero alterando su edad
	return {
		...persona,
		edad: persona.edad + 1
	}
}

var byronMasViejo = cumpleanosCopia(byron)
console.log(byron)
console.log(byronMasViejo)