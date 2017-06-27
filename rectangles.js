function area(object){
  return object.width * object.height;
}
function perimeter(object){
  return (2 * object.height) + (2 * object.width);
}
function diagonal(object){
  return Math.sqrt(object.width * object.width + object.height * object.height);
}
function isSquare(object){
  return object.width == object.height;
}

module.exports = {area,
                  perimeter,
                  diagonal,
                  isSquare};
