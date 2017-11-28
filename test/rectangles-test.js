var assert = require('assert');
var expect    = require("chai").expect;
var rectangleFunctions = require("../lib/rectangles");
describe('rectangle', function() {
  describe('area', function() {
    it('should return the rectangles area', function() {
      var rectangle = {width: 10, height: 20}

      var expectedArea = 200
      var area = rectangleFunctions.area(rectangle)

      assert.deepEqual(expectedArea, area, "area is computed correctly");
    });
  });

  describe('perimeter', function() {
    it('should return the rectangles perimeter', function() {
      var rectangle = {width: 10, height: 20}

      var expectedPerimeter = 60
      var perimeter = rectangleFunctions.perimeter(rectangle)

      assert.deepEqual(expectedPerimeter, perimeter, "perimeter is computed correctly");
    });
  });

  describe('diagonal', function() {
    it('should return the length of the rectangles diagonal', function() {
      var rectangle = {width: 10, height: 15}

      var expectedDiagonal = 18.027756377319946
      var diagonal = rectangleFunctions.diagonal(rectangle)

      assert.deepEqual(expectedDiagonal, diagonal, "perimeter is computed correctly");
    });
  });

  describe('isSquare', function() {
    it('should return true if the rectangle is a square', function() {
      var rectangle = {width: 10, height: 20}
      var square = {width: 10, height: 10}

      var squareTest = rectangleFunctions.isSquare(square)
      var rectangleTest = rectangleFunctions.isSquare(rectangle)

      expect(rectangleTest).to.be.false;
      expect(squareTest).to.be.true;
    });
  });
});
