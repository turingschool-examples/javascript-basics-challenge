const assert = require('chai').assert;
const functions = require('../lib/average');
const arr = [2, 6, 9, 3, 7, 1, 10, 2];
const arr2 = [1, 6, 9, 3, 7, 1, 10];

describe("Averages", function() {
  context("total", function() {
    it("returns the total of all values in an array", function() {
      assert.equal(functions.total(arr), 40);
    });
  });
  context("mean", function() {
    it("returns the average of elements in an array", function() {
      assert.equal(functions.mean(arr), 5);
    });
  });
  context("median", function() {
    it("returns the median of an array", function() {
      assert.equal(functions.median(arr), 4.5);
      assert.equal(functions.median(arr2), 6);
    });
  });
  context("mode", function() {
    it("returns the mode as an object of mode and frequency", function() {
      var expectedMode = {
        2: 2
      };
      assert.deepEqual(functions.mode(arr), expectedMode);
    });
  });
});


// 1, 2, 2, 3, 6, 7, 9, 10