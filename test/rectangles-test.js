const assert = require('chai').assert
const area = require('../rectangles').area
const perimeter = require('../rectangles').perimeter
const diagonal = require('../rectangles').diagonal
const isSquare = require('../rectangles').isSquare

describe('rectangles', function() {
  context('rectangle function', function() {

    var rectangle = {width: 10, height: 20}

    it('can calculate the area', function() {
      assert.equal(area(rectangle), 200);
    })

    it('can calculate the perimeter', function() {
      assert.equal(perimeter(rectangle), 60);
    })

    it('can calculate the diagonal', function() {
      assert.equal(diagonal(rectangle), 22.360679774997898);
    })

    it('can assess if a rectangle is a square', function() {
      assert.equal(isSquare(rectangle), false);
    })
  })
})
