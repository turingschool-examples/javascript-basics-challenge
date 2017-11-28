const assert = require('chai').assert;
const expect = require('chai').expect;
const functions = require('../lib/rectangle');
const rectangle = {width: 10, height: 20};
const square = {width: 10, height: 10};

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
  context("diagonal", function() {
    it("returns the length of the rectangle's diagonal", function() {
      assert.equal(functions.diagonal(rectangle), 22.360679774997898)
    });
  });
  context("isSquare", function() {
    it("returns true if the rectange is a square and false otherwise", function() {
      expect(functions.isSquare(rectangle)).to.be.false;
      expect(functions.isSquare(square)).to.be.true;
    });
  });
});