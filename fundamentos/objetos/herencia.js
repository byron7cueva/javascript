const ES_ALTO = 1.80

function heredaDe (prototipoHijo, prototipoPadre) {
	var fn = function () {}
	fn.prototype = prototipoPadre.prototype
	prototipoHijo.prototype = new fn
	prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function () {
	console.log(`Hola soy ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
	return this.altura > ES_ALTO
}

function Desarrollador (nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
	console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var byron = new Persona('Byron', 'Cueva', 1.85)
var erika = new Desarrollador('Erika', 'Luna', 1.90)

byron.saludar()
erika.saludar()
console.log(erika.soyAlto())

// Otra forma de hacer herencia

function Disenador () {
	// Llamando al constructo de la clase que hereda
	Persona.apply(this, arguments)
}

Disenador.prototype = Object.create(Persona.prototype)
Disenador.prototype.constructor = Disenador

Disenador.prototype.saludar = function () {
	console.log(`Hola soy ${this.nombre} ${this.apellido} y soy un Disenador`)
}

var luis = new Disenador('Luis', 'Mera', 1.99)
luis.saludar()
console.log(luis.soyAlto())