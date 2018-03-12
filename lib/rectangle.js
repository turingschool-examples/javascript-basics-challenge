const pry = require('pryjs')

class Rectangle {
  constructor(attributes){
    this.width = attributes["width"]
    this.height = attributes["height"]
  }
  
  area(){
    return this.width * this.height
  }

}

// eval(pry.it)
module.exports = Rectangle
