const assert = require('chai').assert;
const rectangles = require('../rectangles');

var rectangle = {width: 10, height: 20};
var rectangle2 = {width: 10, height: 10}

it('finds area of triange', function() {
  assert.equal(rectangles.area(rectangle), 200);
});

it('finds the perimeter', function() {
  assert.equal(rectangles.perimeter(rectangle), 60);
});

it('finds the diagonal', function() {
  assert.equal(rectangles.diagonal(rectangle), 22.360679774997898);
});

it('tells if it is a square', function() {
  assert.equal(rectangles.isSquare(rectangle), false);
  assert.equal(rectangles.isSquare(rectangle2), true);
});
