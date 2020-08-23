// * Operador de reposo
// Permite extrer todas las demas propiedades de un objeto
// en una varible

const obj = {
  name: 'Byron',
  age: 32,
  country: 'EC'
};

let { name, ...all} = obj;
console.log(name, all);