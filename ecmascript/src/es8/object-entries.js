// * Object entries
// Permite pasar un objeto a un array de propiedades
// donde cada propiedad y valor es un sub array
// con la primera posicion la propiedad y la siguiente el valor
// Esto permite tambien a su vez concer de forma mas sencilla cuantas
// propiedades tiene un objeto

const data = {
  frontend: 'Byron',
  backend: 'David',
  design: 'Gaby'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);