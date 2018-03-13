const rectangleArea = (rectangle) => {
  return rectangle.width * rectangle.height;
}

const rectanglePerimeter = (rectangle) => {
  return (rectangle.width * 2) + (rectangle.height * 2);
}

const rectangleDiagonal = (rectangle) => {
  return Math.sqrt(Math.pow(rectangle.width,2) + Math.pow(rectangle.height,2));
}

const isSquare = (rectangle) => {
  if(rectangle.width === rectangle.height) {
    return true;
  } else {
    return false;
  }
}

module.exports = [rectangleArea, rectanglePerimeter, rectangleDiagonal, isSquare]
