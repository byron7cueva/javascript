// * Parametros por defecto
// antes
function newFunction(name, age, country) {
    var name = name || 'byron';
    var age = age || 32;
    var country = country || 'EC';
    console.log(name, age, country);
}

// es6
function newFunctionEs6(name = 'byron', age = 32, country = 'EC') {
    console.log(name, age, country);
}

newFunction();
newFunctionEs6();