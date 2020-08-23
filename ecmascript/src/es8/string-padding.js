// * String Padding
// Permite agregar elementos a un string

const word = 'hello';
// padStart(numero_caracteres que va tener la cadena, cadena a agregar)
console.log(word.padStart(7, 'hi'));
console.log(word.padEnd(12, ' -----'));
console.log('food'.padEnd(10, ' -----'));