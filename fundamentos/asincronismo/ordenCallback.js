const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje (id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	fetch(url)
	.then(response => {
		return response.json()
	})
	.then(person => {
		console.log(`Hola, yo soy ${person.name}`)
		if (callback) {
			callback()
		}
	})
	.catch(error => {
		console.error(error.message)
		console.error(error.stack)
	})
}

// Se esta pidiendo los datos en serie
obtenerPersonaje(1, function () {
	obtenerPersonaje(2, function () {
		obtenerPersonaje(3, function () {
			obtenerPersonaje(4, function () {
				obtenerPersonaje(5, function () {
					obtenerPersonaje(6, function () {
						obtenerPersonaje(7)
					})
				})
			})
		})
	})
})