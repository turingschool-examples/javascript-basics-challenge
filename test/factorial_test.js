const assert = require('chai').assert
const factorial = require('../lib/factorial')

describe("a function finds factorial of number", () => {
  it("factorial", () => {
    let input = 5;
    assert.equal(factorial(input), 120)
  })
})
