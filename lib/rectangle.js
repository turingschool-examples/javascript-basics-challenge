
// area
function area(rectangle) {
  return rectangle.width * rectangle.height;
}

// perimeter
function perimeter(rectangle) {
  return (2 * rectangle.width) + (2 * rectangle.height);
}

// diagonal
function diagonal(rectangle) {
  return Math.sqrt(squaredRectangle(rectangle));
}

function squaredRectangle(rectangle) {
  return ( Math.pow(rectangle.height, 2) + Math.pow(rectangle.width, 2));
}

// square or not?
function isSquare(rectangle) {
  if(rectangle.width === rectangle.height) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = { area:area,
                   perimeter:perimeter,
                   diagonal:diagonal,
                   isSquare:isSquare
                 }
