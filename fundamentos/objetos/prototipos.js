const ES_ALTO = 1.80

function Persona (nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function () {
	console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
	if ( this.altura > ES_ALTO ) {
		console.log('Soy alto')
	}
}

var byron = new Persona('Byron', 'Cueva', 1.85)
byron.saludar()
byron.soyAlto()

var erika = new Persona('Erika', 'Luna', 1.70)
erika.saludar()
erika.soyAlto()