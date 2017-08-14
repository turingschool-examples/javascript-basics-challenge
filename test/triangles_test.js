
// isTriangle(6,8,10) # => true, a right triangle
// isTriangle(8,6,10) # => true, the same right triangle
// isTriangle(10,8,6) # => true, the same right triangle
//
// isTriangle(4, 8, 50) #=> false, no such triangle exists

const assert = require('chai').assert
const Triangle = require('../lib/triangles.js')

describe('With a suite of geometric functions', function() {

  it('can determine if an equilateral triangle', function() {

    var x = 3
    var y = 3
    var z = 3

    triangle = new Triangle(x, y, z);

    var actual = triangle.isTriangle()
    var expected = true

    assert.equal(actual, expected);
  });

  it('returns false if any side is zero length', function() {
    var x = 0
    var y = 3
    var z = 3

    triangle = new Triangle(x, y, z);

    var actual = triangle.isTriangle()
    var expected = false

    assert.equal(actual, expected);
  });

  it('returns false if any side is negative length', function() {
    var x = 3
    var y = 3
    var z = -3

    triangle = new Triangle(x, y, z);

    var actual = triangle.isTriangle()
    var expected = false

    assert.equal(actual, expected);
  });

  it('can determine a right triangle', function() {
    var x = 3
    var y = 4
    var z = 5

    triangle = new Triangle(x, y, z);

    var actual = triangle.isTriangle()
    var expected = true

    assert.equal(actual, expected);
  });

})
