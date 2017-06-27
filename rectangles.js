
function area(rectangle){
  return rectangle["height"] * rectangle["width"]
}

function perimeter(rectangle){
  return (rectangle["height"]*2) + (rectangle["width"]*2)
}

function diagonal(rectangle){
  return Math.sqrt((Math.pow(rectangle["height"], 2) + Math.pow(rectangle["width"], 2))).toFixed(2)
}

function isSquare(rectangle){
  if(rectangle["height"] === rectangle["width"]){
    return true
  }else {
    return false
  }
}
module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}