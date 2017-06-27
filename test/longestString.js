const longestString  = require('../lib/longestString')
const assert = require('chai').assert

describe("longestString", () => {

  it("finds the longest string", () => {
    let assertion = longestString(['house', 'cat', 'elephants'])
    let expected  = "elephants"

    assert.equal(assertion, expected)
  })

  it("finds the longest string", () => {
    let assertion = longestString(['horses', 'cats', 'pineapples'])
    let expected  = "pineapples"

    assert.equal(assertion, expected)
  })

  it("finds the longest string", () => {
    let assertion = longestString(['horses', 'cats', 'at'])
    let expected  = "horses"

    assert.equal(assertion, expected)
  })

  it("all the strings are the same", () => {
    let assertion = longestString(["love", "door", "dogs"])
    let expected  = "All strings are the same length!"

    assert.equal(assertion, expected)
  })
})
