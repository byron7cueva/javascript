// Nos ayuda a desacernos al efecto de lado,
// Ya que esto conlleva a un monton de bugs, por lo tanto es bueno trabajar con estructuras inmutables

const byron = {
	nombre: 'Byron',
	apellido: 'Cueva',
	edad: 30
}

// Efecto de lado
// Modifica cosas fuera de ella
const cumpleanos = persona => persona.edad++

// No se afecta al objeto
// Se crea uno nuevo
const cumpleanosInmutable = persona => ({
	...persona,
	edad: persona.edad + 1
})

cumpleanosInmutable(byron)