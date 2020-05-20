var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	altura: 1.76
}

var pedro = {
	nombre: 'Pedro',
	apellido: 'Morales',
	altura: 1.69
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
	altura: 1.77
}

var personas = [ byron, pedro, juan, ana, carla ]

console.log(personas)
console.log(personas[0].altura)
console.log(personas[0]['altura'])

for (let persona of personas) {
	console.log(`${persona.nombre} tiene ${persona.altura}m de altura`)
}