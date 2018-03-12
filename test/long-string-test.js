const assert = require('chai').assert
const longestString = require('../lib/long-string')

describe("Longest test", () => {
  it("can find the longest string out of an array", () => {
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples')
  })
})
