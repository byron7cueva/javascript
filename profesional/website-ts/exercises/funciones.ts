function add2(a: number, b: number): number {
  return a + b;
}

const sum2 = add2(4, 6);

// Indicando que va retornar una funcion
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


// Parametros opcionales
// ? con ese simbolo le indicamos que es opcional, en ese caso el parametro va ser string o undefined
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const byron = fullName('Byron');

// Valor por omision
function fullName2(firstName: string, lastName: string = 'Cabrera'): string {
  return `${firstName} ${lastName}`;
}

const byron2 = fullName2('Byron');
console.log(byron2);
