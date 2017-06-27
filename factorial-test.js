const assert = require("chai").assert;
const factorial = require("./factorial.js");

describe("countNumbersBetween two numbers in an array, ordered by value", function() {
  context("arrays", function() {
    it("can count the numbers between", function() {
      assert.equal(factorial(5), 120);
    });
  });
});
