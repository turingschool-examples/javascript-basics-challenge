const Average = require('../lib/average')
const assert  = require('chai').assert


describe("Average", () => {
  const average = new Average();

  it("#total", () => {
    let array     = [1, 2, 3, 5]
    let assertion = average.total(array)
    let expected  = 11

    assert.equal(assertion, expected)
  })

  it("#mean", () => {
    let array     = [1, 2, 3, 5]
    let assertion = average.mean(array)
    let expected  = 2.75

    assert.equal(assertion, expected)
  })

  it("#median", () => {
    let array     = [1, 2, 3, 5]
    let assertion = average.median(array)
    let expected  = 3

    assert.equal(assertion, expected)
  })

  it("#mode", () => {
    let array     = [1, 1, 3, 5]
    let assertion = average.mode(array)
    let expected  = 1

    assert.equal(assertion, expected)
  })

  it("#mode none found", () => {
    let array     = [1, 2, 3, 5]
    let assertion = average.mode(array)
    let expected  = "No mode"

    assert.equal(assertion, expected)
  })
})
