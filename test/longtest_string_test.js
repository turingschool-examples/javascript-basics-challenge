const assert = require('chai').assert;
const longestString   = require('../longest_string').longestString


describe("longestString function", function(){
  it("returns the longest string in an array", function(){
    assert.equal(longestString(["apple", "pear", "orange"]), "orange")
  });
});
