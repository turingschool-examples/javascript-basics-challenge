var assert = require('chai').assert;
var area = require('../rectangles').area;
var perimeter = require('../rectangles').perimeter;
describe('rectangle functionality', function(){
  it('can return the area', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })

  it('can return the perimeter', function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(perimeter(rectangle), 60)
  })

  
})
