const assert = require('chai').assert;
const area = require('../lib/rectangle').area;
const perimeter = require('../lib/rectangle').perimeter;

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
      var rectangle_3_4 = { width: 3, height: 4 }
      assert.equal(diagonal(rectangle), 5)
    });
  });
});
