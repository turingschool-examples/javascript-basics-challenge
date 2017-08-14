class Rectangle {

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  area(){
    return (this.width * this.height);
  };

  perimeter(){
    return (this.width*2 + this.height*2);
  }

  diagonal(){
    return Math.sqrt((this.width * this.width) + (this.height * this.height))
  }

  isSquare(){
    return this.width == this.height
  }
}

module.exports.Rectangle = Rectangle;