var assert = require('chai').assert
var area = require('../lib/rectangle').area
var perimeter = require('../lib/rectangle').perimeter
var diagonal = require('../lib/rectangle').diagonal
var square = require('../lib/rectangle').square

describe('Rectangle', function(){
  it('calculate area', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })

  it('calculate perimeter', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(perimeter(rectangle), 60)
  })

  it('calculates the diagonal', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(diagonal(rectangle), 22.36)
  })

  it('tells if rectangle is square', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(square(rectangle), false)
  })
})
