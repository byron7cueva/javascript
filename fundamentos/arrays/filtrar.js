var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	altura: 1.76
}

var pedro = {
	nombre: 'Pedro',
	apellido: 'Morales',
	altura: 1.56
}

var juan = {
	nombre: 'Juan',
	apellido: 'Sandoval',
	altura: 1.80
}

var carlos = {
	nombre: 'Carlos',
	apellido: 'Viana',
	altura: 1.70
}

var ana = {
	nombre: 'Ana',
	apellido: 'Suarez',
	altura: 1.78
}

var carla = {
	nombre: 'Carla',
	apellido: 'Sanchez',
	altura: 1.50
}

const PERSONA_ALTA = 1.75
const esAlta = ({altura}) => altura > PERSONA_ALTA
const esBaja = persona => !esAlta(persona)

var personas = [ byron, pedro, juan, ana, carla ]

// Filtrando personas altas
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(persona => persona.altura > PERSONA_ALTA)
//console.log(personasAltas)

var personasBajas = personas.filter(esBaja)
console.log(personasBajas)