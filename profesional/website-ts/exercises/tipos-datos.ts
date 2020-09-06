let muted: boolean = true;
muted = false;
// muted = 'callado'; // Esto da un error

// Numeros
let age = '6';
let numerador: number = 42;
// Hce un analisis estatico de los tipos
// let denominador: number = age;
let denominador: number = 11;
let resultado = numerador / denominador;

// String
let nombre: string = 'Byron';
let saludo = `Me llamo ${nombre}`;

// Arreglos
// De un tipo especifico
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push(5); Nos da error ya que es una arreglo de string

// Indicando que el array puede tener string y number
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Luis');
peopleAndNumbers.push(800);

// Enums
// Crea una lista de valores, enumerandolos desde el 0 hasta el numero de elementos que contiene
// a cada elemento
/* enum Color {
  Rojo,
  Verde,
  Azul,
  Amarillo,
}*/

// Cambiando los valores, inicializando sus valores
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
// Para variables que no sabemos de que tipo van ha ser
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

// Object
let someObject: object = {type: 'Wildcard'};