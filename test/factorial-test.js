var assert = require('assert');
var expect    = require("chai").expect;
var factorialFunctions = require("../lib/factorials");
describe('factorials', function() {
  describe('area', function() {
    it('should return the factorials area', function() {
      // 24 (4 * 3 * 2 * 1 == 24)

      var four = factorialFunctions.factorial(4)
      var ten = factorialFunctions.factorial(10)
      var oneHundred = factorialFunctions.factorial(100)

      assert.deepEqual(four, 24, "four is computed correctly");
      assert.deepEqual(ten, 3628800, "ten is computed correctly");
      assert.deepEqual(oneHundred, 9.332621544394418e+157, "one hundred is computed correctly");
    });
  });
});
