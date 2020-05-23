const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function get (callback) {
	fetch(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`)
	.then(response => {
		return response.json()
	})
	.then(data => {
		callback(data)	
	})
	.catch(error => {
		console.error(error.message)
		console.error(error.stack)
	})
}

function onPeopleResponse (person) {
	console.log(`El personaje es ${person.name}`)
}

get(onPeopleResponse)