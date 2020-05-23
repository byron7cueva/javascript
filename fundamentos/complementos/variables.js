var byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30
}

function esMayorDeEdad (persona) {
	// hoisting: Declarar la variable arriba
	// JavaScript sube la declaracion de la variable hacia arriba y luego hace la declaracion
	if (persona.edad >= 18) {
		var mensaje = 'Es mayor de edad'
	} else {
		var mensaje = 'Es menor de edad'
	}
	console.log(mensaje)
}

function esMayorDeEdad2 (persona) {
	let mensaje
	// Let reduce su alcance solo al bloque de codigo donde es utlizado
	const MAYORIA_DE_EDAD = 18
	// const funciona igual que let pero su valor no se puede reasignar
	// En un array se puede agregar mas elementos, pero no se puede reasignar a la variable
	if (persona.edad >= MAYORIA_DE_EDAD) {
		mensaje = 'Es mayor de edad'
	} else {
		mensaje = 'Es menor de edad'
	}
	console.log(mensaje)
}

for (var i = 0; i < 10; i++) {
	console.log(i)
}
// Se puede acceder todavia a i porque se declaro con var
console.log(`Termino el for, el valor de i es ${i}`)

for (let j = 0; j < 10; j++) {
	console.log(j)
}
// No se puede acceder a j porque esta solo vive en el bloque en donde fue declarado
console.log(`Termino el for, el valor de j es ${j}`)

// Con var 