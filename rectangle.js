function Rectangle(width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype = {
  area: function() {
    return this.width * this.height
  },
  
  perimeter: function() {
    return (this.width * 2) + (this.height * 2)
  },
  
  diagonal: function() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))
  },
  
  isSquare: function() {
    if (this.width === this.height) {
      return true
    } else {
      return false
    }
  }
}


module.exports = Rectangle