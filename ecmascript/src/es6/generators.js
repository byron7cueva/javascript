// * Generators
// Es una funcion especial que una serie de valores segun el algoritmo
// definido

function* helloWorld() {
    if (true) {
        // yield guarda el estado de forma interna
        yield 'Hello, ';
    }
    if (true) {
        // El segundo elemento que va ser llamado cuando sea ejecutado el siguiente valor
        yield 'World';
    }
}

const generatorHello = helloWorld();
// next para ir ejecutando la logica
// cuando se ejecuta next va a recordar donde estaba
console.log(generatorHello.next().value); // Devuelve: Hello,
console.log(generatorHello.next().value); // Devuelve: World
console.log(generatorHello.next().value); // Devuelve: undefined