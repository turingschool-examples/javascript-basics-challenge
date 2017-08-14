const assert = require('chai').assert;
const area = require('../lib/rectangle').area;
const perimeter = require('../lib/rectangle').perimeter;
const diagonal = require('../lib/rectangle').diagonal;

describe("Rectangle", () => {
  context("Given a width and a height", () => {
    var rectangle = { width: 10, height: 20 };

    it("calculates the area", () => {
      assert.equal(area(rectangle), 200);
    });

    it("calculates the perimeter", () => {
      assert.equal(perimeter(rectangle), 60);
    });

    it("calculates the diagonal", () => {
      var rectangle_3_4 = { width: 3, height: 4 };
      assert.equal(diagonal(rectangle_3_4), 5);
    });

    it("determines if a rectangle is a square", () => {
      var square = { width: 10, height: 10 };
      var not_square = { width: 10, height: 20 };
      assert.equal(isSquare(square), true)
      assert.equal(isSquare(not_square), false);
    });
  });
});
