function perimeterCalculator (rectangle) {
  let width = rectangle.width;
  let height = rectangle.height;
  if (width <= 0 || height <= 0) {
    return null;
  } else {
    return (width + height) * 2;
  }
};

module.exports = perimeterCalculator
