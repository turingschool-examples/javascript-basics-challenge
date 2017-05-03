const assert = require('chai').assert
const longestString = require('../longest_string').longestString;

describe("longestString", function() {
  it("returns the longest string", function() {
    var array = ["tomato", "pineapples", "sauce"];
    var result = longestString(array);
    var expected = "pineapples"
    assert.deepEqual(expected, result)
  });

  it("returns null for an empty array", function() {
    var array = [];
    var result = longestString(array);
    var expected = null
    assert.deepEqual(expected, result)
  });
});