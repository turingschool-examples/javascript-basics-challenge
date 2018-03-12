area = (rectangle) => rectangle.width * rectangle.height 

perimeter = (rectangle) => rectangle.width * 2 + rectangle.height * 2 

diagonal = (rectangle) => {
  return (Math.sqrt(rectangle.width * rectangle.width + rectangle.height * rectangle.height)).toFixed(1)
}

isSquare = (rectangle) => {
return rectangle.width === rectangle.height ? true: false
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}