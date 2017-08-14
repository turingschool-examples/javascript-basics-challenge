const assert = require('chai').assert;
const factorial = require('../lib/factorial');

describe("Factorial", () => {
  context("Given an integer", () => {
    it("calculates the factorial", () => {
      assert.equal(factorial(0), 1);
      assert.equal(factorial(1), 1);
      assert.equal(factorial(4), 24);
    });

    it("does not calculate a factorial for a negative number", () => {
      assert.equal(factorial(-1), undefined);
    });
  });
});
