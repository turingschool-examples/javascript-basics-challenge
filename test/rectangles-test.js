var assert = require('chai').assert;
var area = require('../rectangles').area;
var perimeter = require('../rectangles').perimeter;
var diagonal = require('../rectangles').diagonal;
var isSquare = require('../rectangles').isSquare;

describe('rectangle functionality', function(){
  it('can return the area', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })

  it('can return the perimeter', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(perimeter(rectangle), 60)
  })

  it('can return the diagonal for a rectangle', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(diagonal(rectangle), Math.sqrt(500))
  })

  it('checks if a rectangle is a square', function(){
    var rectangle = {width: 10, height: 20}
    var square = {width: 10, height: 10}
    assert.equal(isSquare(rectangle), false)
    assert.equal(isSquare(square), true)
  })
})
