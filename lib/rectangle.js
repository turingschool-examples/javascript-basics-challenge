class Rectangle {
  area(r) {
    return r.width * r.height;
  };

  perimeter(r) {
    return (r.width * 2) + (r.height * 2);
  };

  diagnol(r) {
    var raw = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2));
    return raw.toFixed(2);
  };

  isSquare(r) {
   return r.width == r.height
 };
 
};

module.exports = Rectangle;
