const assert = require('chai').assert
const isTriangle = require('../lib/triangle');

describe("Triangle", () => {
  context("Given three sides", () => {
    it("determines if the three sides can make a triangle", () => {
      assert.equal(isTriangle(3, 4, 5), true);
      // assert.equal(isTriangle(4, 5, 3), true);
      // assert.equal(isTriangle(5, 4, 3), true);
      // assert.equal(isTriangle(3, 4, 4), false);
    });

    it("verifies that the input numbers are positive", () => {
      // assert.equal(isTriangle(-3, 4, 5), false);
    });
  });
});
