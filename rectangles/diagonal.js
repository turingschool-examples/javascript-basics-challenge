var diagonal = function(rectangle) {
  return Math.sqrt(squared(rectangle["width"]) + squared(rectangle["height"]));

}

squared = function(side) {
  return side * side;
}

module.exports = diagonal;
