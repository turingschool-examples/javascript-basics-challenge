var pry = require('pryjs');

var rectangle = {
  width: 10,
  height: 20,
  area: function() {
    return (this.width * this.height);
  },
  perimeter: function() {
    return (this.width + this.height) * 2;
  },
  diagonal: function() {
    var squaredWidth = Math.pow(this.width, 2);
    var squaredHeight = Math.pow(this.height, 2);
    return Math.sqrt(squaredWidth + squaredHeight);
  },
  square: function() {
    if (this.width == this.height) {
      return true;
    } else {
      return false;
    }
  }
};

// eval(pry.it)
console.log(rectangle.area())
console.log(rectangle.perimeter())
console.log(rectangle.diagonal())
console.log(rectangle.square())
