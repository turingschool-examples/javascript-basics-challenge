var assert = require('chai').assert;
var area = require('../rectangle').area
var perimeter = require('../rectangle').perimeter
var diagonal = require('../rectangle').diagonal
var isSquare = require('../rectangle').isSquare



describe('Rectangle functions', function() {
  it('can calculate the area', function() {
    assert.equal(area({width: 10, height: 20}), 200)
  })

  it('can calculate the perimeter', function() {
    assert.equal(perimeter({width: 10, height: 20}), 60)
  })

  it('can calculate the diagonal length', function() {
    assert.equal(diagonal({width: 10, height: 20}), Math.sqrt(500))
  })

  it('can calculate if a rectangle is a square', function() {
    assert.equal(isSquare({width: 10, height: 20}), false)
  })
})
