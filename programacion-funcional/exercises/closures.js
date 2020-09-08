function buildSum(a) {
  return function (b) {
    return a + b
  }
}

let addFive = buildSum(5)
console.log(addFive(5)) //10


// Con arrow functions
const buildSumArrow = a => b => a + b
addFive = buildSumArrow(5)
console.log(addFive(5)) //10