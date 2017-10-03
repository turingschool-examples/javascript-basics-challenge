function isSquare(rectangle) {
  let width = rectangle.width;
  let height = rectangle.height;
  if (width <= 0 || height <= 0) {
    return null;
  } else {
    if (width === height) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isSquare
