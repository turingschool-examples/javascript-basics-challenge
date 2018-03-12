assert = require('chai').assert
expect = require('chai').expect
const factorialFunctions = require('../lib/factorial')

describe("factorial functions",() => {
  it("can calculate the factorial of a number", () => {
    assert.equal(factorialFunctions.factorial(3),6)
  })
})