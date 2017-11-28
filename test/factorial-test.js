const assert = require('chai').assert;
const factorial = require('../lib/factorial');

describe("Factorial", function() {
  context("factorial", function() {
    it("returns the factorial of a non-negative integer", function() {
      assert.equal(factorial(5), 120);
      assert.equal(factorial(6), 720);
      assert.equal(factorial(4), 24);
      assert.equal(factorial(1), 1);
    });
  });
});