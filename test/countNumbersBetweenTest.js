const countNumbersBetween  = require('../lib/countNumbersBetween')
const assert = require('chai').assert

describe("countNumbersBetween", () => {

  it("one test", () => {
    let assertion = countNumbersBetween([25, 2, 8], 0, 100)
    let expected  = 3

    assert.equal(assertion, expected)
  })

  it("two test", () => {
    let assertion = countNumbersBetween([-19, 1, 22], 0, 100)
    let expected  = 2

    assert.equal(assertion, expected)
  })

  it("three test", () => {
    let assertion = countNumbersBetween([100, 200, 300], 100, 300)
    let expected  = 3

    assert.equal(assertion, expected)
  })

  it("four test", () => {
    let assertion = countNumbersBetween([], -10, 10)
    let expected  = 0

    assert.equal(assertion, expected)
  })

  it("five test", () => {
    let assertion = countNumbersBetween([5], 5, 5)
    let expected  = 1

    assert.equal(assertion, expected)
  })
})
