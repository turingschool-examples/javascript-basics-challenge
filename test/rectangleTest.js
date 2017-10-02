const assert = require('chai').assert
const rectangle = require('../rectangle')

describe('rectangle functions', function() {
  context('with area', function() {
    it('it can calculate area', function() {
      var rec = {width: 5, height: 6}
      assert.equal(rectangle.area(rec), 30)
    })
  })

  context('with perimeter', function() {
    it('it can calculate perimter', function() {
      var rec = {width: 4, height: 2}
      assert.equal(rectangle.perimeter(rec), 12)
    })
  })

  context('with diagonal', function() {
    it('it can calculate diagonal', function() {
      var rec = {width: 4, height: 3}
      assert.equal(rectangle.diagonal(rec), 5)
    })
  })

  context('with isSquare', function() {
    it('it returns true if w and h are qual', function() {
      var rec = {width: 5, height: 5}
      assert.equal(rectangle.isSquare(rec), true)
    })

    it('it returns false if w and h are not equal', function() {
      var rec = {width: 5, height: 4}
      assert.equal(rectangle.isSquare(rec), false)
    })
  })
})
