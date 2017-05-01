var assert = require('chai').assert
var area = require('../lib/rectangle').area
var perimeter = require('../lib/rectangle').perimeter
var diagonals = require('../lib/rectangle').diagonals
var isSquare = require('../lib/rectangle').isSquare

describe('Rectangle', function(){
  it('calculate area', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })

  it('calculate perimeter', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(perimeter(rectangle), 60)
  })

  it('calculate diagonals', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(diagonals(rectangle), 22.36)
  })

  it('calculate is squared', function(){
    var rectangle = {width: 10, height: 20}
    var square = {width: 10, height: 10}
    assert.isTrue(isSquare(square))
    assert.isFalse(isSquare(rectangle))
  })
})
