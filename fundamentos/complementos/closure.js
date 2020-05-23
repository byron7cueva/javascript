// Es una funcion que recuerda el estado de las cosas cuando fue invocada

function crearSaludo (finalDeFrase) {
	// La siguiente funcion recuerda el valor de la variable pasada por parametros
	return function (nombre) {
		console.log(`Hola ${nombre} ${finalDeFrase}`)
	}
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('parse')

saludoArgentino('Byron')
saludoMexicano('Byron')
saludoColombiano('Byron')