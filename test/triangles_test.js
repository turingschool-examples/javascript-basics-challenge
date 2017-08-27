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

  it('can determine if it is not a triangle because of 0 length sides', function() {

    triangle = new Triangle(0, 0, 0)

    var actual = triangle.isTriangle()
    var expected = "false, because a triangle can't have 0 length sides"

    assert.equal(actual, expected)

    triangle1 = new Triangle(3, 0, 3)

    var actual = triangle1.isTriangle()
    var expected = "false, because a triangle can't have 0 length sides"

    assert.equal(actual, expected)

    triangle2 = new Triangle(0, 3, 3)

    var actual = triangle2.isTriangle()
    var expected = "false, because a triangle can't have 0 length sides"

    assert.equal(actual, expected)

    triangle3 = new Triangle(3, 3, 0)

    var actual = triangle3.isTriangle()
    var expected = "false, because a triangle can't have 0 length sides"

    assert.equal(actual, expected)
  })

  it('can determine if it is not a triangle because of negagtive lengths', function() {

    triangle = new Triangle(-2,1,5)

    var actual = triangle.isTriangle()
    var expected = "false, because a triangle can't have negative length sides"

    assert.equal(actual, expected)
  })

  it('can determine if it is a right triangle', function() {

    triangle = new Triangle(6,8,10)

    var actual = triangle.isTriangle()
    var expected = "true, a right triangle"

    assert.equal(actual, expected)
  })

  it('can determine a right triangle given in any order', function() {
    var x = 3
    var y = 4
    var z = 5

    triangle = new Triangle(x, y, z)
    triangle2 = new Triangle(x, z, y)
    triangle3 = new Triangle(y, x, z)
    triangle4 = new Triangle(y, z, x)
    triangle5 = new Triangle(z, x, y)
    triangle6 = new Triangle(z, y, x)

    var actual = triangle.isTriangle()
    var actual2 = triangle2.isTriangle()
    var actual3 = triangle3.isTriangle()
    var actual4 = triangle4.isTriangle()
    var actual5 = triangle5.isTriangle()
    var actual6 = triangle6.isTriangle()

    var expected = "true, a right triangle"

    assert.equal(actual, expected)
    assert.equal(actual2, expected)
    assert.equal(actual3, expected)
    assert.equal(actual4, expected)
    assert.equal(actual5, expected)
    assert.equal(actual6, expected)

  })

})
