const assert = require('chai').assert
const factorial = require('../source/factorials')

describe('factorial calculation', function() {

  it('can return the factorial of any number', function(){
    assert.equal(factorial(0), 1)
    assert.equal(factorial(4), 24)
    assert.equal(factorial(6), 720)
    assert.equal(factorial(8), 40320)
  })
})
