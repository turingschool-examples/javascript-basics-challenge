function area (rectangle) {
  return rectangle.height * rectangle.width
};

function perimeter (rectangle) {
  return (rectangle.height *2) + (rectangle.width *2)
};

//refactor this function
function diagonal (rectangle) {
  return Math.round(Math.sqrt((Math.pow(rectangle.width, 2)) + (Math.pow(rectangle.height, 2))) * 100)/100
};

function isSquare (rectangle) {
  if (rectangle.width === rectangle.height) {
    return true
  } else {
    return false
  }
};

module.exports = {area, perimeter, diagonal, isSquare}
