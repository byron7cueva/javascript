const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje (id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	fetch(url)
	.then(response => {
		return response.json()
	})
	.then(person => {
		callback(person)
	})
	.catch(error => {
		console.error(`Sucedio un error no se pudo objetener el personaje ${id}`)
	})
}

// Se esta pidiendo los datos en serie
obtenerPersonaje(1, function (person) {
	console.log(`Hola, yo soy ${person.name}`)

	obtenerPersonaje(2, function (person) {
		console.log(`Hola, yo soy ${person.name}`)

		obtenerPersonaje(3, function (person) {
			console.log(`Hola, yo soy ${person.name}`)

			obtenerPersonaje(4, function (person) {
				console.log(`Hola, yo soy ${person.name}`)

				obtenerPersonaje(5, function (person) {
					console.log(`Hola, yo soy ${person.name}`)

					obtenerPersonaje(6, function (person) {
						console.log(`Hola, yo soy ${person.name}`)

						obtenerPersonaje(7, function (person) {
							console.log(`Hola, yo soy ${person.name}`)
						})
					})
				})
			})
		})
	})
})