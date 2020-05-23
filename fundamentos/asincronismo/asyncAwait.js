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

async function obtenerPersonajes () {
	var ids = [1, 2, 3, 4, 5, 6, 7]
	var promesas = ids.map(id => obtenerPersonaje(id))
	try {
		var persons = await Promise.all(promesas)
		for (let person of persons) {
			console.log(`Hola, yo soy ${person.name}`)
		}
	} catch (id) {
		onError(id)
	}
}

obtenerPersonajes()