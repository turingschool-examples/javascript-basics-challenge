let perimeter = require('../lib/rectangles-perimeter');
let assert = require('chai').assert;
let rectangle = {width: 10, height: 20};

describe('perimeter function', function(){
  it ('returns the perimeter of a rectangle', function(){
    assert.equal(perimeter(rectangle), 60)
  })
})
