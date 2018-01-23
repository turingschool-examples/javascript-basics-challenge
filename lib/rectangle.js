function area(rectangle) {
  return rectangle.width * rectangle.height
};

function perimeter(rectangle)  {
  return (rectangle.width * 2) + (rectangle.height * 2)
}

function diagonal(rectangle)  {
  var diagonal = Math.sqrt(Math.pow(rectangle.height,2)+ Math.pow(rectangle.width,2))
  return Math.round(diagonal * 100) / 100
}

function isSquare(rectangle)  {
  if (rectangle.width === rectangle.length) {
    return true
  }
  return false
}





module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
