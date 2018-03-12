let a = 2
let b = 2
let c = 4

function isNegative(element) { element < 0 }

function isTriangle(a, b, c) {
  let sides = [a,b,c]
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return false
  } else if (sides.some(isNegative)) {
    return false
  } else {
    return ((a + b > c) && (a + c > b) && (b + c > a)) ? true : false
  }
}





module.exports = {isTriangle: isTriangle}


console.log(isTriangle(1, 1, 1))
console.log(isTriangle(4, 5, 6))
console.log(isTriangle(-3,3, 9))
// Write a function called isTriangle which takes an input of three non-negative numbers. It should return true if the three numbers could form the side lengths of a triangle and false otherwise.
// The sum of two sides of a triangle must be greater than the third side. If this is true for all three combinations, then you will have a valid triangle. 