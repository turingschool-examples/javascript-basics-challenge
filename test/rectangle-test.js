const assert = require('chai').assert;
const {area, perimeter, diagonal, isSquare} = require('../lib/rectangle');

describe('area calculation', function() {
  it('calculates area of a rectangle', function() {
    var rectangle = { width: 10, height: 20 };
    var expected = 200;
    var result = area(rectangle);
    assert.equal(result, expected);
  });
});

describe('perimeter calculation', function() {
  it('calculates perimeter of a rectangle', function() {
    var rectangle = { width: 10, height: 20 };
    var expected = 60;
    var result = perimeter(rectangle);
    assert.equal(result, expected);
  });
});

describe('diagonal length calculation', function() {
  it('calculates diagonal length of a rectangle', function() {
    var rectangle = { width: 3, height: 4 };
    var expected = 5;
    var result = diagonal(rectangle);
    assert.equal(result, expected);
  });
});

describe('determining if square', function() {
  it('determines if a rectangle is also a square', function() {
    var rectangle = { width: 3, height: 4 };
    var square = { width: 3, height: 3 };
    assert.equal(isSquare(square), true);
    assert.equal(isSquare(rectangle), false);
  });
});
