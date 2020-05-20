// Reducir un array a un valor unico

var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	altura: 1.76,
	cantidadDeLibros: 91
}

var pedro = {
	nombre: 'Pedro',
	apellido: 'Morales',
	altura: 1.56,
	cantidadDeLibros: 182
}

var juan = {
	nombre: 'Juan',
	apellido: 'Sandoval',
	altura: 1.80,
	cantidadDeLibros: 90
}

var carlos = {
	nombre: 'Carlos',
	apellido: 'Viana',
	altura: 1.70,
	cantidadDeLibros: 132
}

var ana = {
	nombre: 'Ana',
	apellido: 'Suarez',
	altura: 1.78,
	cantidadDeLibros: 78
}

var carla = {
	nombre: 'Carla',
	apellido: 'Sanchez',
	altura: 1.50,
	cantidadDeLibros: 50
}

var personas = [ byron, pedro, juan, ana, carla ]

// (acomulador, item) retorna el nuevo valor del acomulador
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)
console.log(`El total de todos los libros es: ${totalLibros}`)