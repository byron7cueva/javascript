// * Array Flat Map
// Este permite mapear cada elemento, despues pasarle una funcion
// y aplanarlo segun el resultado

let array = [1,2,3,4,5];
// Hace el map y luego aplana
console.log(array.flatMap(value => [value, value * 2]));