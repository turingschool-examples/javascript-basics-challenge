var pry = require('pryjs');

var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return (2 * this.width) + (2 * this.height);
  }

  diagonal() {
    return Math.sqrt((Math.pow(this.width, 2)) + (Math.pow(this.height, 2)));
  }

  isSquare() {
    return this.width === this.height;
  }
}

module.exports = Rectangle
