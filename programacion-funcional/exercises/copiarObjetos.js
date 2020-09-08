const car = {
  color: 'red',
  km: 0,
  year: 2019,
  own: {
    name: 'Byron',
    age: 30
  }
}

// Object.assign(a dondo, de donde)
// Copia el valor como tal del objeto, sus propiedades. En primer nivel
// Pero una propiedad que tiene un objeto copiara la referencia
const newCar = Object.assign({}, car);
newCar.year = 2000;
newCar.own.age = 20;
console.log(car, newCar);


//
const car2 = {
  color: 'red',
  km: 0,
  year: 2019,
  own: {
    name: 'Byron',
    age: 30
  }
}

const newCar2 = JSON.parse(JSON.stringify(car))
newCar2.year = 2000
newCar2.own.age = 20;
console.log(car2, newCar2);