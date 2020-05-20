var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

function imprimirProfesiones ( persona ) {
	console.log(`${persona.nombre} es: `)
	persona.ingeniero && console.log('Es ingeniero')
	persona.cocinero && console.log('Es cocinero')

	persona.cantante ? console.log('Es cantante') : console.log('No es cantante')

	if (persona.dj) console.log('Es dj')

	if (persona.guitarrista) {
		console.log('Es gutarrista')
	} else {
		console.log('No es gutarrista')
	}

	if (persona.drone) {
		console.log('Es piloto de drones')
	}
}

const MAYOR_EDAD = 18

function imprimirSiEsMayorEdad (persona) {
	var { edad } = persona
	console.log(`Es ${edad >= MAYOR_EDAD ? 'Mayor' : 'Menor'} de edad`)
}

imprimirProfesiones(byron)
imprimirSiEsMayorEdad(byron)