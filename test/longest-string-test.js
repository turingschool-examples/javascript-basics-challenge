const assert = require('chai').assert;
const longestString = require('../longest-string');


describe("longestString function", function() {
  it("returns the longest string in an array of strings", function() {
    var expected = 'pineapples';
    var actual = longestString(['horses', 'cats', 'pineapples']);
    assert.equal(expected, actual);
  });

  it("returns null if array is empty", function() {
    var expected = null;
    var actual = longestString([]);
    assert.equal(expected, actual);
  });
})