class Rectangle {
  area(rect) {
    return rect.height * rect.width;
  };

  perimeter(rect) {
    return (rect.height * 2) + (rect.width * 2);
  };

  diagonal(rect) {
    var raw = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2));
    return raw.toFixed(2);
  }

  isSquare(rect) {
    return rect.width == rect.height
  }
};

module.exports = Rectangle;
