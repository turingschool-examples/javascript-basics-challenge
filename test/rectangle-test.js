const assert = require('chai').assert;
const area = require('../lib/rectangle');

describe("Rectangle", () => {
  context("Given a width and a height", () => {
    it("calculates the area", () => {
      var rectangle = { width: 10, height: 20 };
      assert.equal(area(rectangle), 200);
    });

    it("calculates the perimeter", () => {
      var rectangle = { width: 10, height: 20 };
      assert.equal(perimeter(rectangle), 60);
    });
  });
});
