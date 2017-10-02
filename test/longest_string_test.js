const assert = require('chai').assert;
const longestString = require('../strings/longest_string')

describe("longest string function test", function(){
  context("array with strings", function(){
    it("returns the longest string given an array of strings", function(){
      var stringArray = ['horses', 'cats', 'pineapples'];
      var secondArray = ['dan', 'mike', 'cheri', 'thomas', 'jillian', 'jennifer'];
      assert.equal("pineapples", longestString(stringArray));
      assert.equal("jennifer", longestString(secondArray));
    })
    it("returns NULL for empty array", function(){
      var emptyArray = []
      assert.isNull(longestString(emptyArray))
    })
  });
});
