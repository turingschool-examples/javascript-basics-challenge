var assert = require('chai').assert;
var expect = require('chai').expect;
var functions = require('../lib/rectangles');
var rectangle = { width: 10, height: 20 };
var square = { width: 10, height: 10 };

describe("Rectangle equations", function () {
  it("calculates rectangle area", function () {
    assert.equal(functions.area(rectangle), 200);
  });

  it("calculates rectagle perimeter", function () {
    assert.equal(functions.perimeter(rectangle), 60);
  });

  it("find length of diagonal", function () {
    assert.equal(functions.diagonal(rectangle), 22.360679774997898)
  });

  it("determines if rectangle is a square", function () {
    expect(functions.isSquare(rectangle)).to.be.false;
    expect(functions.isSquare(square)).to.be.true;
  });
});
