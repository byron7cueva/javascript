var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30,
	peso: 75
}

console.log(`Al inicio del ano ${byron.nombre} pesa ${byron.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

let random
for (let i = 1; i <= DIAS_DEL_ANO; i++) {
	random = Math.random()

	if (random < 0.25) {
		aumentarDePeso(byron)
	} else if (random < 0.50) {
		adelgazar(byron)
	}
}

console.log(`Al final del ano ${byron.nombre} pesa ${byron.peso.toFixed(2)}kg`)