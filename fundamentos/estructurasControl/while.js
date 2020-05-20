var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30,
	peso: 75
}

console.log(`Al inicio del ano ${byron.nombre} pesa ${byron.peso}kg`)

const INCREMENTO_PESO = 0.3
const META = byron.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comemMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

let dias = 0
while (byron.peso > META) {
	if (comemMucho()) {
		aumentarDePeso(byron)
	}

	if (realizaDeporte()) {
		adelgazar(byron)
	}
	dias++
}


console.log(`Pasaron ${dias} dias hasta que ${byron.nombre} adelgazo 3kg`)