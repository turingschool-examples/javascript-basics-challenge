function areaCalculator (width, height) {
  if (width <= 0 || height <= 0) {
    return null;
  } else {
    return width * height;
  }
};

module.exports = areaCalculator
