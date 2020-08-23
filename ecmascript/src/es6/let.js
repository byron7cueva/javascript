// * let
// Con let solo se encuentra disponible la variable en el scope
// o el bloque de codigo donde es definida.

{
    var globalVar = 'Global Var';

}

{
    let globalLet = 'Global Let';
}

console.log(globalVar);

// Esto da un mensaje de ERROR indicando que no se encuentra definida
console.log(globalLet);