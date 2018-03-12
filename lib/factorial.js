const pry = require('pryjs')

class Factorial {

  constructor(number){
    this.number = number
  }

  factorial(number){
    if(number === 0){
      return 1
    }
    return number * this.factorial(number-1)
  }

}

module.exports = Factorial
