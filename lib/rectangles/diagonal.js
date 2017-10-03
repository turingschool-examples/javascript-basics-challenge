function diagonalCalculator(rectangle) {
  let width = rectangle.width;
  let height = rectangle.height;

  if (width <= 0 || height <= 0) {
    return null;
  } else {
    const hypotenuseSquared = Math.pow(width, 2) + Math.pow(height, 2);
    return Math.sqrt(hypotenuseSquared);
  }
}

module.exports = diagonalCalculator
