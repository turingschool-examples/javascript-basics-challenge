class Triangle {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
  }

  isTriangle() {
    var sides = [this.x, this.y, this.z];

    if(this.x == this.y && this.y == this.z) {
      return "true, an equilateral triangle";
    };

    if(this.x == 0 || this.y == 0 || this.z == 0) {
      return "false, a triangle can't have 0 length sides"
    };

    if(this.x < 0 || this.y < 0 || this.z < 0) {
      return "false, a triangle can't have negative length sides"
    };

    if(calculateRightTriangle(sides)) {
      return "true, a right triangle";
    };

    if(determineValidTriangle(sides)) {
      return "true, it's a triangle!"
    } else {
      return "false, ain't no triangle";
    }

  }

}

function calculateRightTriangle(sides) {
  var longestSide = findHypotenuse(sides)
  var orderedSides = squareSides(orderSides(sides, longestSide))
  if(orderedSides[0] + orderedSides[1] == orderedSides[2]) {
    return true;
  }
}

function determineValidTriangle(sides) {
  var longestSide = findHypotenuse(sides)
  var orderedSides = orderSides(sides, longestSide)
  if(orderedSides[0] + orderedSides[1] >= orderedSides[2]) {
    return true;
  }
}

function findHypotenuse(sides) {
  return Math.max.apply(null, sides);
}

function orderSides(array, longestSide) {
  var indexLong = array.indexOf(longestSide);
  array.splice(indexLong, 1);
  array.push(longestSide);
  return array;
}

function squareSides(array) {
  return array.map(function(num) {
      return Math.pow(num, 2);
  })
}



module.exports = Triangle
