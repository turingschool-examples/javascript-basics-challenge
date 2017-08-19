const rectangleFile = require('../lib/rectangles.js')
const assert = require('chai').assert

describe('With a suite of geometric functions', function() {
  var rectangle = {width: 10, length: 20}
  it('can calcuate the area of a rectangle', function() {
    var actual = rectangleFile.area(rectangle)
    var expected = 200

    assert.equal(actual, expected)
  })

  it('can calculate the perimeter of each function', function() {
    var actual = rectangleFile.perimiter(rectangle)
    var expected = 60
    
    assert.equal(actual, expected)
  })

  it('can calculate the diagonal of the rectactle', function () {
    var actual = rectangleFile.diagonal(rectangle)
    var expected = Math.sqrt(500)

    assert.equal(actual, expected)

  })
})
