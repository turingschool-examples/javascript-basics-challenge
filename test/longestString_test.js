const assert = require('chai').assert;
const longestString = require('../longestString')

describe("longestString", function() {
  it("returns null if array is empty", function() {
    var array = []
    assert.deepEqual(longestString(array), null)
  })
  it("returns the longest string in the array", function() {
    var array = ["hello", "hi", "three", "butterfly"]
    assert.deepEqual(longestString(array), "butterfly")
  })
})
