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

obtenerPersonaje(1)
.then(person => {
	console.log(`Hola, yo soy ${person.name}`)
})
.catch(id => {
	console.log(`Error al obtener el personaje ${id}`)
})