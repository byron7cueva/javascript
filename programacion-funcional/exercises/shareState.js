// Scope compartido
// Funcion que muta el valor de a
const a = {
  value: 2
}

const addOne = () => a.value += 1
const timesTwo = () => a.value *=2

addOne()
timesTwo()
console.log(a.value)

timesTwo()
addOne()
console.log(a.value)

// Inmutabilidad
console.log('Inmutabilidad')
const b = {
  value: 2
}

const addOneInm = b => Object.assign({}, b, {value: b.value + 1})
const timesTwoInm = b => Object.assign({}, b, {value: b.value * 2})

console.log(timesTwoInm(addOneInm(b)))
console.log(addOneInm(timesTwoInm(b)))
console.log(b)