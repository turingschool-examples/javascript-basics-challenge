function area(params) {
  return (params.width * params.height)
}

function perimeter(params) {
  return ((params.width * 2) + (params.height * 2))
}

function diagonal(params) {
  var base = (Math.pow(params.width, 2) + Math.pow(params.height, 2))
  return Math.sqrt(base, 2)
}

function isSquare(params) {
  if (params.width === params.height) {
    return true
  }
  else {
    return false
  }
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
