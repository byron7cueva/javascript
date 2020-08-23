// * Array Flat
// Permite aplanar un arreglo multidimensional
// indicandole hasta que nivel de profundidad deseamos aplanarlo

let array = [1,2,3,[1,2,3,[1,2,3]]];

// Se le pasa como parametros la profundidad hasta donde se desea aplanar
console.log(array.flat(2));