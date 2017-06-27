const factorial  = require('../lib/factorial')
const assert = require('chai').assert

describe("factorial", () => {

  it("regular", () => {
    let assertion = factorial(4)
    let expected  = 24

    assert.equal(assertion, expected)
  })

  it("two test", () => {
    let assertion = factorial(0)
    let expected  = 1

    assert.equal(assertion, expected)
  })

  it("three test", () => {
    let assertion = factorial(-4)
    let expected  = "Stop trying to break me!"

    assert.equal(assertion, expected)
  })
})
