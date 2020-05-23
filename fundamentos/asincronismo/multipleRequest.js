const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function onPeopleResponse (person) {
	console.log(`Hola, yo soy ${person.name}`)
}

function obtenerPersonaje (id) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	fetch(url)
	.then(response => {
		return response.json()
	})
	.then(data => {
		onPeopleResponse(data)
	})
	.catch(error => {
		console.error(error.message)
		console.error(error.stack)
	})
}

// No se puede controlar el orden en el cual van a retornar los request
// Esto depende de la velocidad del servidor y el costo de la operacion que este realizando
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)