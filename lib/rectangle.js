function area(rectangle) {
  var totalArea = rectangle.width * rectangle.height;
  return totalArea;
};

function perimeter(rectangle) {
  var perimeter = 2 * (rectangle.width + rectangle.height);
  return perimeter;
};

module.exports = {area, perimeter};
