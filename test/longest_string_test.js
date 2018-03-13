const assert = require('chai').assert
const longestString = require('../lib/longest_string')

describe("finds the longest string in an array", () => {
  it("longestString", () => {
    let input = ["hi", "hey", "hiya", "hello"];
    assert.equal(longestString(input), "hello")
  })
})
