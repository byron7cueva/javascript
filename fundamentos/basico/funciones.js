var nombre = 'Byron', edad = 28

// Depende mucho el orden en el que se le padsa los argumentos
// Al ser debilmente tipado este no espera que siempre estas esten definidas
// No se fija de que variables son obligatorias o sean de un tipo de dato
// especifico
function imprimirEdad (n, e) {
	console.log(`${n} tiene ${e} años de edad`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Eric', 29)