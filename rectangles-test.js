const assert = require('chai').assert;
const rectangleFunctions = require('./rectangles');

describe('Area', function() {
  context('area function', function() {
    it('it can get the area of a rectangle', function() {
      var rectangle = {width: 10, height: 20}
      assert.equal(rectangleFunctions.area(rectangle), 200)
    })
  })
})

describe('Perimeter', function() {
  context('perimeter function', function() {
    it('it can get the perimeter of a rectangle', function() {
      var rectangle = {width: 10, height: 20}
      assert.equal(rectangleFunctions.perimeter(rectangle), 60)
    })
  })
})

describe('Diagonal', function() {
  context('diagonal function', function() {
    it('it can get the diagonal of a rectangle', function() {
      var rectangle = {width: 10, height: 20}
      assert.equal(rectangleFunctions.diagonal(rectangle), 22.360679774997898)
    })
  })
})

describe('isSquare', function() {
  context('isSquare function', function() {
    it('it returns true if rectangle is square', function() {
      var rectangle = {width: 10, height: 20}
      assert.isNotTrue(rectangleFunctions.isSquare(rectangle))
      rectangle = {width: 10, height: 10}
      assert.isTrue(rectangleFunctions.isSquare(rectangle))
    })
  })
})
