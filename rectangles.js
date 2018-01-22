function Rectangle(width, height){
  this.width = width;
  this.height = height;
}

function area(rectangle){
 return rectangle.width * rectangle.height; 
}

function perimeter(rectangle){
  return (rectangle.width * 2) + (rectangle.height * 2);
}

function diagonal(rectangle){
  return Math.round(Math.sqrt((rectangle.width * rectangle.width) + (rectangle.height * rectangle.height)), )
}

function isSquare(rectangle){
  if (rectangle.width === rectangle.height){
    return true
  } else {
    return false
  }
}

module.exports = { Rectangle, area, perimeter, diagonal, isSquare }
