const assert = require('chai').assert
var myFunctions = require('../lib/rectangles.js')

describe('rectangle', function() {
  context('area function', function() {
    it('it can calculate the area of a rectangle', function() {
      var rectangle = {width: 3, height: 4}
      assert.equal(myFunctions.area(rectangle), 12)
    })
  });
  context('perimeter function', function() {
    it('it can calculate the perimeter of rectangle', function() {
    var rectangle = {width: 3, height: 4}
    assert.equal(myFunctions.perimeter(rectangle), 14)
    })
  });
  context('diagonal function', function() {
    it('it can calculate the diagonal of rectangle', function() {
    var rectangle = {width: 3, height: 4}
    assert.equal(myFunctions.diagonal(rectangle), 5)
    })
  });
  context('isSquare function', function() {
    it('it can determine if rectangle is a square', function() {
    var rectangle = {width: 3, height: 4}
    var rectangle2 = {width: 4, height: 4}
    assert.equal(myFunctions.isSquare(rectangle), "false"),
    assert.equal(myFunctions.isSquare(rectangle2), "true")
    })
  });
})
