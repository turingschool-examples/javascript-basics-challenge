const pry = require('pryjs')
// eval(pry.it)

class Rectangle {
  constructor(attributes){
    this.width = attributes["width"]
    this.height = attributes["height"]
  }

  area(){
    return this.width * this.height
  }

  perimeter(){
    return (this.width + this.height) * 2
  }

  diagonal(){
    return Math.sqrt(this.width * this.width + this.height * this.height).toFixed(2)
  }

  isSquare(){
    return this.width === this.height ? true : false
  }
}
module.exports = Rectangle
