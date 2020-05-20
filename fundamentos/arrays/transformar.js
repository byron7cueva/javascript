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

var personas = [ byron, pedro, juan, ana, carla ]

const pasarAlturaACms = persona => ({
	...persona,
	altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)
console.log(personas[0])
console.log(personasCms[0])