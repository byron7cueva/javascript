const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje (id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		fetch(url)
		.then(response => {
			return response.json()
		})
		.then(person => {
			resolve(person)
		})
		.catch(error => {
			reject(id)
		})
	})
}

function onError(id) {
	console.log(`Error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(2)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(3)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(4)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(5)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(6)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
	return obtenerPersonaje(7)
})
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
})
.catch(onError)