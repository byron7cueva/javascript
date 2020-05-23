/* console.log('a')
// Lo pone en la cola de tareas
// Pero JavaScript no lo va ejecutar hasta que termite la ejecucion principal
setTimeout(() => {
	console.log('b')
}, 0)
console.log('c') */

//
// Esta tarea no se va ejecutar en dos minutos si la ejecucion principal no termina
// El dilay es minimo, nada garantiza que no estemos bloqueando el event loop
// Por tal motivo se debe utilizar callbacks, promesas o async/await
setTimeout(() => {
	console.log('d')
}, 2000)

// Una tarea larga
for (var i = 0; i < 10000000000; i++) {

}