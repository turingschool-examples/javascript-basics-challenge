let diagonal  = require('../lib/rectangles-diagonal');
let assert = require('chai').assert;
let rectangle = {width: 10, height: 20};

describe('diagonal function', function(){
  it ('returns the diagonal of a rectangle', function(){
    assert.equal(diagonal(rectangle), 250000)
  })
})
