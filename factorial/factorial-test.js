const assert = require('chai').assert
const factorial = require('./factorial')

describe('factorial functionality', function(){
  it('calculates the factorial', function(){
    assert.equal(factorial(4), 24)
  })
})