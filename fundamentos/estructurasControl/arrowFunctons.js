var byron = {
	nombre: 'Byron',
	edad: 30
}

var juan = {
	nombre: 'Juan',
	edad: 16
}

const MAYORIA_DE_EDAD = 18

// Se la debe indicar como constante para saber que es una funcion
// y que no es una variable
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorEdad = persona => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad ( persona ) {
	const { nombre } = persona

	if (esMayorDeEdad(persona)) {
		console.log(`${nombre} es: mayor de edad`)
	} else {
		console.log(`${nombre} es: menor de edad`)
	}
}

const permitirAcceso = persona => {
	if (!esMayorDeEdad(persona)) {
		console.log('ACCESO DENEGADO')
	}
}

imprimirSiEsMayorDeEdad(byron)
imprimirSiEsMayorDeEdad(juan)