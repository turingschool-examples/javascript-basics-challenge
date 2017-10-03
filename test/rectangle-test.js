const assert = require('chai').assert;
const rectangle = require('../lib/rectangle.js')

var dimensions = {width: 10, height: 20}
var square = {width: 10, height: 10}

describe('Rectangle functionality', function(){
  it('area returns the area', function(){
    assert.equal(rectangle.area(dimensions), 200);
  });

  it('perimeter returns perimeter', function(){
    assert.equal(rectangle.perimeter(dimensions), 60);
  });

  it('diagonal returns diagonal length', function(){
    assert.equal(rectangle.diagonal(dimensions), 22.36);
  });

  it('isSquare returns true if it is a square', function(){
    assert.equal(rectangle.isSquare(dimensions), false);
    assert.equal(rectangle.isSquare(square), true);
  });
})
