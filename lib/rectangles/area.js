function areaCalculator (rectangle) {
  let width = rectangle.width;
  let height = rectangle.height;
  if (width <= 0 || height <= 0) {
    return null;
  } else {
    return width * height;
  }
};

module.exports = areaCalculator
