const assert = require('chai').assert;
const functions = require('../lib/average');
const arr = [2, 6, 9, 3, 7, 1, 10, 2];

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
});