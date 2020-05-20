var byron = {
	nombre: 'Byron',
	edad: 30
}

var juan = {
	nombre: 'Juan',
	edad: 16
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad ( persona ) {
	// Cuando se pone un numero fijo en una condicion y no se entiende
	// que es se llama magic number ya que debemos leer mas el codigo
	// para entender el contexto
	// return persona.edad >= 18
	return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad ( persona ) {
	const { nombre } = persona

	if (esMayorDeEdad(persona)) {
		console.log(`${nombre} es: mayor de edad`)
	} else {
		console.log(`${nombre} es: menor de edad`)
	}
}

imprimirSiEsMayorDeEdad(byron)
imprimirSiEsMayorDeEdad(juan)