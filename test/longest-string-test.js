const assert = require("chai").assert
const longestString = require('../lib/longest-string')

describe("Longest String", () => {
  it("returns the longest string in an array", () => {
    let testArray = ['mississippi', 'alabama', 'texas']
    assert.equal(longestString(testArray), "mississippi")
  })
  
  it("returns undefined if the array is empty", () => {
    let testArray = []
    assert.equal(longestString(testArray), 'null')
  })
})
