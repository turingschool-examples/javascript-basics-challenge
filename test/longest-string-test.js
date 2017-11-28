const assert = require('chai').assert;
const longestString = require('../lib/longest-string');

describe("Longest String", function() {
  context("longestString", function() {
    it("returns the longest string from an array of strings", function() {
      var arr = ['horses', 'cats', 'pineapples'];
      var arr2 = ['motorola', 'samsung', 'apple', 'google', 'superdupercoolphonecompany', 'HTC'];
      assert.equal(longestString(arr), 'pineapples');
      assert.equal(longestString(arr2), 'superdupercoolphonecompany');
    });
  });
});