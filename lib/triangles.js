class Triangle {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
  }

  isTriangle() {
    var sides = [this.x, this.y, this.z]

    if(this.x === 0 || this.y === 0 || this.z === 0) {
      return "false, because a triangle can't have 0 length sides"
    }

    if(this.x === this.y && this.y === this.z) {
      return "true, an equilateral triangle";
    }

    if(this.x < 0 || this.y < 0 || this.z < 0) {
      return "false, because a triangle can't have negative length sides"
    }

    if(determineRightTriangle(sides)) {
      return "true, a right triangle"
    }
  }
}

function determineRightTriangle(sides) {
  var hypotenuse = findHypotenuse(sides)
  var orderedSides = squareSides(orderSides(sides, hypotenuse))
  if(orderedSides[0] + orderedSides[1] == orderedSides[2]) {
    return true
  }
}

function findHypotenuse(sides) {
  return Math.max.apply(null, sides);
}

function orderSides(array, hypotenuse) {
  var indexHypotenuse = array.indexOf(hypotenuse);
  array.splice(indexHypotenuse, 1)
  array.push(hypotenuse)
  return array
}

function squareSides(array) {
  return array.map(function(num) {
    return (num ** 2)
  })
}

module.exports = Triangle
