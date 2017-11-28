
const assert = require('chai').assert;
const expect = require('chai').expect;
var rectangleBasics = require('../lib/rectangle')
var area = rectangleBasics.area
var perimeter = rectangleBasics.perimeter
var diagonal = rectangleBasics.diagonal
var isSquare = rectangleBasics.isSquare

var rectangle = {width: 10, height: 20}

describe('shape dimensions', function() {
  context('for rectangle', function() {
    it("can return area of shape", function() {
      assert.deepEqual(area(rectangle), 200)
    })
  })
})

describe('shape dimensions', function() {
  context('for rectangle', function() {
    it("can return perimeter of shape", function() {
      assert.deepEqual(perimeter(rectangle), 60 )
    })
  })
})

describe('shape dimensions', function() {
  context('for rectangle', function() {
    it("can return diagonal of shape", function() {
      assert.deepEqual(diagonal(rectangle), 22.360679774997898 )
    })
  })
})

describe('shape dimensions', function() {
  context('for rectangle', function() {
    it("can return true/false if rectangle is square", function() {
      assert.deepEqual(isSquare(rectangle), false)
    })
  })
})
