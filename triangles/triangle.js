var x = 3
var y = 4
var z = 5

var isTriangle = function(x,y,z) {
  if ((x < 0) || (y < 0) || (z < 0)) {
    return 'false, because a triangle cannot have negative length sides'
  } else if ((x === 0) || (y === 0) || (z === 0)) {
    return 'false, because a triangle cannot have 0 length sides'
  } else if ((x+y <= z) || (x+z <= y) || (y+z <= x)) {
    return 'false, not a real triangle'
  } else if (((Math.pow(x, 2)) + Math.pow(y, 2) === Math.pow(z, 2)) || ((Math.pow(x, 2)) + Math.pow(z, 2) === Math.pow(y, 2)) || ((Math.pow(z, 2)) + Math.pow(y, 2) === Math.pow(x, 2))) {
    return 'true, it is a right triangle'
  } else if ((x === y) && (x === z)) {
    return 'true, it is an equalateral triangle'
  } else {
    return 'true, it is a triangle'
  }
}


module.exports = isTriangle