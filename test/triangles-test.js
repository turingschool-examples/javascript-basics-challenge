const assert = require('chai').assert
const triangles = require('../lib/triangles')

describe("Triangle", function() {
  context("is a triangle", function() {
    it("returns true", function() {
      let triangle = {side_1: 3, side_2: 4, side_3: 5}
      let result = triangles.isTriangle(triangle)
      assert.equal(result, true)
    });
  });

  context("is not a triangle", function() {
    it("returns false", function() {
      let triangle = {side_1: 4, side_2: 8, side_3: 50}
      let result = triangles.isTriangle(triangle)
      assert.equal(result, false)
    });
  });

  context("has negative side length", function() {
    it("returns false", function() {
      let triangle = {side_1: -2, side_2: 1, side_3: 5}
      let result = triangles.isTriangle(triangle)
      assert.equal(result, false)
    });
  });
});
