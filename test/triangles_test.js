// isTriangle(0,0,0) # => false, because a triangle can't have 0 length sides
// isTriangle(-2,1,5) # => false, because a triangle can't have negative length sides
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

})
