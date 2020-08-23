// * Clases
// Una sintaxis para manejar objetos y tambien su herencia

class Calculator {
  constructor() {
      // Creando propiedades publicas de la clase
      this.valueA = 0;
      this.valueB = 0;
  }

  sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 4));