const assert = require('chai').assert
const Rectangle = require('../lib/rectangles')

describe('rectangles functionality', function() {
  context('area(rectangle)', function() {
    it('calculates and returns the area of the rectangle', function() {
      var rectangle = {width: 10, height: 20}
      assert.deepEqual(Rectangle.area(rectangle), 200)
    })

    it('calculates the area of a different rectangle', function() {
      var rectangle = {width: 0.5, height: 22}
      assert.deepEqual(Rectangle.area(rectangle), 11)
    })
  })

  context('perimeter(rectangle)', function() {
    it('calculates and returns the perimeter of the rectangle', function() {
      var rectangle = {height: 10, width: 20}
      assert.deepEqual(Rectangle.perimeter(rectangle), 60)
    })
    it('calculates and returns the perimeter of a different rectangle', function() {
      var rectangle = {height: 0.3, width: 0.25}
      assert.deepEqual(Rectangle.perimeter(rectangle), 1.1)
    })
  })

  context('diagonal(rectangle)', function() {
    it('calculates and returns the diagonal length of the rectangle', function() {
      var rectangle = {height: 4, width: 3}
      assert.deepEqual(Rectangle.diagonal(rectangle), 5)
    })
    it('calculates and returns the diagonal length of a different rectangle', function() {
      var rectangle = {height: 5, width: 12}
      assert.deepEqual(Rectangle.diagonal(rectangle), 13)
    })
  })

  context('isSquare(rectangle)', function() {
    it('returns true if the height and width are the same', function() {
      var rectangle = {height: 4, width: 4}
      assert.isTrue(Rectangle.isSquare(rectangle))
      assert.equal(Rectangle.isSquare(rectangle), true)
    })

    it('returns false if the height and width are different', function() {
      var rectangle = {height: 5, width: 12}
      assert.isFalse(Rectangle.isSquare(rectangle))
      assert.equal(Rectangle.isSquare(rectangle), false)
    })
  })
})
