const assert = require('chai').assert;
const factorialFunctions = require('../factorial');

describe("Factorial", function() {
  it("returns 1 for zero", function() {
    assert.equal(1, factorialFunctions.factorial(0))
  })
  it("returns an error for a negative number", function() {
    assert.equal("Error, cannot use negative numbers", factorialFunctions.factorial(-1))
  })
  it("returns the factorial for a positive integer", function() {
    assert.equal(120, factorialFunctions.factorial(5)) 
    assert.equal(720, factorialFunctions.factorial(6)) 
    assert.equal(40320, factorialFunctions.factorial(8)) 
    assert.equal(1, factorialFunctions.factorial(1)) 
  })
})
