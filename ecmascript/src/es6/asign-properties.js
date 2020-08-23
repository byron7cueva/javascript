// * Propiedad de objetos mejorado

const name = 'Byron';
const age = 32;

// es5
const obj = { name: name, age: age };

// es6
// Si el nombre de la propiedad es igual al nombre de la variable
// a asignar solo requiere de indicarle una sola vez
const objEs6 = { name, age };

console.log(obj);
console.log(objEs6);