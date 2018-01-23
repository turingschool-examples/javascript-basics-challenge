
const assert =  require("chai").assert;
const strings = require("../lib/longestString");

it("returns the longest string in an array", function() {
  array = ["a", "ab", "abc", "abcd"]
  assert.equal("abcd", strings.longestString(array) );
});

it("returns null if array is empty", function() {
  array = [];
  assert.equal(null, strings.longestString(array));
})


