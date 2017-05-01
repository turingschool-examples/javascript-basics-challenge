const assert = require('chai').assert;
const {area, perimeter, diagonal} = require('../lib/rectangle');

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
