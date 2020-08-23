// * Operador de propagacion
// Permite unir elementos de un objeto a otro objeto
// Permite la estructuracion de un nuevo objeto basado en otro objeto

const obj = {
  name: 'Byron',
  age: 32
}

const obj1 = {
  ...obj,
  country: 'EC'
}

console.log(obj1);