const assert = require('chai').assert
const isTriangle = require('../lib/triangle');

describe("Triangle", () => {
  context("Given three sides", () => {
    it("determines if the three sides can make a triangle", () => {
      assert(isTriangle(3, 4, 5), true);
      assert(isTriangle(3, 4, 4), false);
    });

    it("verifies that the input numbers are positive", () => {
      assert(isTriangle(-3, 4, 5), false);
    });
  });
});
