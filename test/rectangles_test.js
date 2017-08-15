const assert = require('chai').assert
const rectangles = require('../rectangles')


describe('functions can return different rectangle properties', function() {

  it('can return the area of a rectangle', function(){
    var attributes = {width: 10, height: 20};

    assert.deepEqual(rectangles.area(attributes), (200))
  })

  it('can return the perimeter', function(){
    var attributes = {width: 10, height: 20};

    assert.deepEqual(rectangles.perimeter(attributes), (60))
  })

  it('can return the diagonal value', function(){
    var attributes = {width: 10, height: 20};

    assert.deepEqual(rectangles.diagonal(attributes), (60))
  });

})
