const assert = require('chai').assert
const factorial = require('../factorial.js')

describe('factorial()', () => {
  it('it returns the factorial for 0 (1)', () => {
    assert.equal(factorial(0), 1)
  })

  it('it returns the factorial for 4 (24)', () => {
    assert.equal(factorial(4), 24)
  })

  it('it returns the factorial for 5 (120)', () => {
    assert.equal(factorial(5), 120)
  })
})

// Write a `factorial` function which takes as its input a
// non-negative integer and calculates the factorial of that number.
//
// The factorial of a number is the product of all integers
// from 1 up to that number.  For example:
//
// ```javascript
// factorial(4) // 24 (4 * 3 * 2 * 1 == 24)
// ```
//
// The factorial of 0 is defined to be 1.
