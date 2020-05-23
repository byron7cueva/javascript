const byron = {
	nombre: 'Byron',
	apellido: 'Cueva'
}

function saludar (saludo = 'Hola') {
	console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// Cambiar el contexto de una funcion
const saludarAByron = saludar.bind(byron)

saludar(byron)
saludarAByron()

setTimeout(saludar.bind(byron, 'Hola che'), 1000)

// Ejecuta la funcion ese momento cambiando el contesto
saludar.call(byron)
saludar.call(byron, 'Hola che')

// Llama a la funcion, pero los parametros se envia a traves de un array
saludar.apply(byron, ['Hola che'])