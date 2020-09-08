const buildSum = a => b => a + b
const tag = t => content => `<${t}>${content}</${t}>`

function sumThreeNumbers(a, b, c) {
  return a + b + c
}

// Currying
function sumThreeNumberCurrying(a) {
  return function(b) {
    return function(c) {
      return a + b +c
    }
  }
}

console.log(sumThreeNumberCurrying(1)(2)(3))