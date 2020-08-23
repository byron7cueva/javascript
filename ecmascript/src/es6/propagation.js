// * Propagacion

let team1 = [ 'Byron', 'Luis', 'Pedro' ];
let team2 = [ 'Oscar', 'Gaby', 'Ana' ];

// Crea un nuevo array que contenga ademas a las personas de
// los arreglos anteriores
let education = [ 'David', ...team1, ...team2 ];
console.log(education);