var assert = require('assert');
var expect    = require("chai").expect;
var longestStringFunctions = require("../lib/longest-string");
describe('longest string', function() {
  describe('longest string', function() {
    it('should return the longest string', function() {
      var array = ['the', 'accelerating', 'brown', 'fox', 'jumped', 'over', 'the', 'long', 'word']
      var array2 = []

      var longest = longestStringFunctions.longestString(array)
      var nullString = longestStringFunctions.longestString(array2)

      assert.deepEqual(longest, "accelerating", "longest string is retrieved successfully");
      assert.deepEqual(nullString, null, "returns null for empty array");
    });
  });
});
