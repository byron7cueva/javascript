// * Template Literals

// antes
var hello = 'Hello';
var world = 'World';
var epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
var epicPhraseEs6 = `${hello} ${world}`;
console.log(epicPhraseEs6);



// * Multilinea

// antes
var lorem = 'Various versions have evolved over \n'
+ 'the years, sometimes by accident';

// es6
var loremEs6 = `Various versions have evolved over
the years, sometimes by accident`;

console.log(lorem);
console.log(loremEs6);
