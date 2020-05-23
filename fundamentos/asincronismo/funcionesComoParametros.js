const ES_ALTO = 1.80

class Persona {
	constructor (nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}	

	saludar (responder) {
		const { nombre, apellido } = this
		console.log(`Hola soy ${nombre} ${apellido}`)
		if (responder) {
			responder(nombre, apellido)
		}
	}

	soyAlto () {
		return this.altura > ES_ALTO
	}
}


class Desarrollador extends Persona {
	constructor (nombre, apellido, altura) {
		super(nombre, apellido, altura)
	}

	saludar (responder) {
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

		if (responder) {
			responder(this.nombre, this.apellido, true)
		}
	}
}


function responderSaludo (nombre, apellido, esDev) {
	console.log(`Buen dia ${nombre} ${apellido}`)

	if (esDev) {
		console.log('No sabia que eras desarrolador')
	}
}

var byron = new Persona('Byron', 'Cueva', 1.85)
var erika = new Desarrollador('Erika', 'Luna', 1.90)

byron.saludar(responderSaludo)
erika.saludar(responderSaludo)