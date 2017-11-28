function area(rect) {
  return rect.width * rect.height;
}

function perimeter(rect) {
  return (rect.width * 2) + (rect.height * 2)
}

function diagonal(rect) {
  return Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
}

function isSquare(rect) {
  if(rect.width === rect.height) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  area: area,
  perimeter: perimeter,
  diagonal: diagonal,
  isSquare: isSquare
};