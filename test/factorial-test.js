const assert = require('chai').assert
const Factorial = require('../lib/factorial.js')

describe("Factorial Test", () => {
  it("can find the factorial of a number", () => {
    let x = new Factorial(5)
    assert.equal(x.factorial(5), 120)
  })
})
