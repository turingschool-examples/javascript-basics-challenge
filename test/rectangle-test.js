const assert = require('chai').assert;
const {area, perimeter} = require('../lib/rectangle');

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
