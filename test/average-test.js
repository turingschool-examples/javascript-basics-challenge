const assert = require('chai').assert;
const functions = require('../lib/average');
const arr = [2, 6, 9, 3, 7, 1, 1];

describe("Averages", function() {
  context("total", function() {
    it("returns the total of all values in an array", function() {
      assert.equal(functions.total(arr), 29);
    })
  })
})