const pry = require('pryjs')

class Triangle {
  constructor(a,b,c){
    this.a = a
    this.b = b
    this.c = c
  }

  isTriangle(){
    if(this.a <= 0 || this.b <= 0 || this.c <= 0){
      return false
    } else {
      return this.checkSideLengths()
    }
  }

  checkSideLengths(){
    // need to have the sort callback comparison function otherwise
    // [4,8,50].sort() = [4,50,8]
    let sides = [this.a, this.b, this.c].sort((a,b) => a-b)
    return sides[2] >= sides[0] + sides[1] ? false : true
  }
}

module.exports = Triangle
