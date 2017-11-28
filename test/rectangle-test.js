const assert = require('chai').assert;
const functions = require('../lib/rectangle');
const rectangle = {width: 10, height: 20};

describe("Rectangle", function() {
  context("area", function() {
    it("calculates area of a rectangle", function() {
      assert.equal(functions.area(rectangle), 200);
    });
  });
  context("perimeter", function() {
    it("calculates perimeter of given rectangle", function() {
      assert.equal(functions.perimeter(rectangle), 60);
    });
  });
});