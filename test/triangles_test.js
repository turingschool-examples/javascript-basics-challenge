const assert = require('chai').assert
const Triangle = require('../lib/triangles.js')

describe('With a suite of geometric functions', function() {

  it('can determine if an equilateral triangle', function() {

    var x = 3
    var y = 3
    var z = 3

    triangle = new Triangle(x, y, z)

    var actual = triangle.isTriangle()
    var expected = "true, an equilateral triangle"

    assert.equal(actual, expected)
  })

})
