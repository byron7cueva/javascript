// Las interfaces nos permiten declarar la forma que tienen un objeto
// Definen la forma exacta que debe tener un objeto, no podemos añadir propiedades demas
// ni menos. Si se requiere una propiedad como opcional se la debe indicar que es opcional con ?
// Cuando se crea una interface se vuelve un tipo

enum Color2 {
  Rojo = 'Rojo',
  Verde = 'Verde'
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color2 // Opcional
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
}

console.log(rect.toString());