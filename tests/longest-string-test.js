assert = require('chai').assert
expect = require('chai').expect
const longestStringFunctions = require('../lib/longest-string')

describe("longest string functions", () => {
  it("can determine the longest string in an array", () => {
    assert.equal(longestStringFunctions.longestString(['horses', 'cats', 'pineapples']), "pineapples")
  })
})