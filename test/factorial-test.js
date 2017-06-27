const assert = require('chai').assert
const factorial = require("../factorial")


describe('factorial', function(){
  context('multiplies to find a factorial', function (){
    it('it returns the factorial of a given positive integer', function(){

      assert.equal(factorial(4), 24)
      assert.equal(factorial(5), 120)
    })
  })
})
