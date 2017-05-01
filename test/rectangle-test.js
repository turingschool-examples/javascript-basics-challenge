const assert = require('chai').assert;
const area = require('../lib/rectangle');

describe('area calculation', function() {
  it('calculates area of a rectangle', function() {
    var rectangle = { width: 10, height: 20 };
    var expected = 200;
    var result = area(rectangle);
    assert.equal(result, expected);
  });
});
