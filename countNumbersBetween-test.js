const assert = require("chai").assert;
const countNumbersBetween = require("./countNumbersBetween.js");

describe("countNumbersBetween two numbers in an array", function() {
  context("arrays", function() {
    it("can count the numbers between", function() {
      assert.equal(countNumbersBetween([1, 2, 3, 4, 5], 1, 5), 3);
      assert.equal(countNumbersBetween([1, 5, 3, 4, 2], 1, 2), 3);
      assert.equal(countNumbersBetween([1, 6, 9, 4, 20], 1, 20), 3);
      assert.equal(countNumbersBetween([1, 2, 3, 5, 6], 1, 2), 0);
    });
  });
});
