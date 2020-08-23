// * Arrow Functions
// Resuelven un problema y tienen una sintaxis mas reducida
// y un this no vinculable
// Las arrow function tambien se puede decir que son funciones anónimas

const names = [
    { name: 'Byron', age: 32},
    { name: 'Gaby', age: 33 }
];

// Con funcion anónima
names.map(function (item) {
    console.log(item.name);
});

// Con arrow function
names.map(item => {
    console.log(item);
});

const listObject = (name, age, country) => {
    console.log(name, age, country);
}

const funcionArrow = name => {
    console.log(name);
}

// Esta funcion retorna directamente el valor que sigue =>
const square = num => num * num;