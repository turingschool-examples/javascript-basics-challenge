const assert = require("chai").assert
const longestString = require("../longest-string")

describe('It can identify the longest string in an array', () => {
  it('can identify the longest string in an array of 2', () => {
    assert.equal(longestString(['horses', 'cats', 'pineapples']), "pineapples")
  })
  
  it('returns null for empty array', () => {
    assert.equal(longestString([]), null)
  })
})