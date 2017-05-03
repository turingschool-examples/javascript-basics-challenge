function area(height, width) {
  return height * width
}

function perimeter(height, width) {
  return (height * 2) + (width * 2)
}

function diagonal(height, width) {
  heightSquared = Math.pow(height, 2)
  widthSquared = Math.pow(width, 2)

  return Math.sqrt(heightSquared + widthSquared)
}

function isSquare(height, width) {
  return height == width
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}