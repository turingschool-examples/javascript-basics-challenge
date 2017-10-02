module.exports = {area, perimeter, diagonal, isSquare}

function area(rectangle) {
  return(rectangle.width * rectangle.height)
};

function perimeter(rectangle) {
  return((rectangle.width*2) + (rectangle.height*2))
};

function diagonal(rectangle) {
  return((rectangle.width*rectangle.width) + (rectangle.height*rectangle.height))
};

function isSquare(rectangle) {
  if (rectangle.height == rectangle.width) {
    return true
  } else {
    return false
  };
};
