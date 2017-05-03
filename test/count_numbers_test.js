const assert = require('chai').assert
const countNumbersBetween = require('../count_numbers').countNumbersBetween;

describe("countNumbersBetween", function() {
  context("counts the numbers within an array", function() {
    it("returns zero if the array is empty", function() {
      emptyArray = [];
      var result = countNumbersBetween(emptyArray, -10, 10);
      var expected = 0;
      assert.equal(expected, result)
    });

    it("returns the sum of numbers between", function() {
      array = [25, 2, 8]
      array2 = [100, 200, 300]
      var result1 = countNumbersBetween(array, 0, 100);
      var expected1 = 3;
      var result2 = countNumbersBetween(array2, 100, 300);
      var expected2 = 3;

      assert.equal(expected1, result1)
      assert.equal(expected2, result2)
    });
  });
});