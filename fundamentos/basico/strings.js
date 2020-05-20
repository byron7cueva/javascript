var nombre = 'Byron'
var apellido = 'Cueva'

// Convertir en mayusculas
var nombreMayusculas = nombre.toUpperCase()

// Convertir en minusculas
var apellidoMinusculas = apellido.toLowerCase()

// Obtener primera letra
var primeraLetraNombre = nombre.charAt(0)

// Catindad de letras
var cantidadLetrasNombre = nombre.length

// Interpolacion de texto
// Permite interpolar varibales
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// Obtener una parte de un texto
// Desde donde empiza, cuantos caracteres quiero a partir de alli
var str = nombre.substr(1, 2)

var ultimaLetra = nombre.charAt(nombre.length - 1)

console.log(nombreMayusculas)
console.log(apellidoMinusculas)
console.log(primeraLetraNombre)
console.log(cantidadLetrasNombre)
console.log(nombreCompleto)
console.log(str)
console.log(ultimaLetra)