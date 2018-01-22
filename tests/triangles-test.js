const assert = require('chai').assert
const triangleFunction = require('../triangles')

describe("Triangle function", function () {
  context("valid triangles", function () {
    it("can calculate it is a triangle regardless of side order", function () {
      let triangle1 = new triangleFunction.Triangle(3, 4, 5);
      let triangle2 = new triangleFunction.Triangle(4, 5, 3);
      let triangle3 = new triangleFunction.Triangle(5, 3, 4);
      
      assert.equal(triangleFunction.isTriangle(triangle1), true);
      assert.equal(triangleFunction.isTriangle(triangle2), true);
      assert.equal(triangleFunction.isTriangle(triangle3), true);
    });

    it("can calculate it is a triangle with all positive numbers", function () {
      let triangle1 = new triangleFunction.Triangle(5, 12, 13);
      let triangle2 = new triangleFunction.Triangle(11, 60, 61);

      assert.equal(triangleFunction.isTriangle(triangle1), true);
      assert.equal(triangleFunction.isTriangle(triangle2), true);
    });
  });

  context("invalid triangles", function () {
    it("can calculate it is not a triangle if a side equals 0", function () {
      let triangle1 = new triangleFunction.Triangle(0, 4, 5)

      assert.equal(triangleFunction.isTriangle(triangle1), false)
    });

    it("can calculate it is not a triangle if a side equals negative number", function () {
      let triangle1 = new triangleFunction.Triangle(-3, 4, 5)

      assert.equal(triangleFunction.isTriangle(triangle1), false)
    });

    it("can calculate it is not a triangle if it has incorrect side length", function () {
      let triangle1 = new triangleFunction.Triangle(3, 4, 8)

      assert.equal(triangleFunction.isTriangle(triangle1), false)
    });
  });
})