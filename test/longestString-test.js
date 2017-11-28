assert = require('chai').assert;
const longestString = require('../lib/longestString');

describe("Longest String", function() {
  it("can determine longest string", function() {
    var array = ["cat", "dog", "ferret"]

    assert.deepEqual(longestString(array), "ferret")
  })

  it("can return null for empty array", function() {
    var emptyArray = []

    assert.isNull(longestString(emptyArray))
  })
})