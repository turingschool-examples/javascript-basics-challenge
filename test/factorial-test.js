const assert = require("chai").assert
const factorial = require("../factorial")

describe('Calculates factorial of a number', () => {
  it('calculates the factorial of a non-zero number', () => {
    assert.equal(factorial(4), 24)
  })
  
  it('calculates the factorial of zero', () => {
    assert.equal(factorial(0), 1)
  })
  
  // it('returns an error message for negative numbers', () => {
  //   assert.equal(factorial(-1), "The factorial of a negative number is undefined")
  // })
})