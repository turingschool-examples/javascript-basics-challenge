const assert = require('chai').assert
const factorial = require('../lib/factorial')

describe("Factorial", () => {
  it("returns a factorial of 5", () => {
    assert.equal(factorial(5), 120)
  })

  it("returns a factorial of 0", () => {
    assert.equal(factorial(0), 1)
  })

  it("cannot return a factorial of -3", () => {
    assert.equal(factorial(-3), undefined)
  })
})
