var diagonal = function(rectangle) {
  return Math.sqrt((rectangle["width"] * rectangle["width"]) + (rectangle["height"] * rectangle["height"]));
}

module.exports = diagonal;
