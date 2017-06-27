const assert = require('chai').assert
const factorial = require('../factorial')

describe("factorial", function(){
  it("can find factorial of number", function(){
    assert.equal(factorial(4), 24)
    assert.equal(factorial(0), 1)
    assert.equal(factorial(1), 1)
    assert.equal(factorial(6), 720)
  })
})