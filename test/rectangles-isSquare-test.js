let isSquare  = require('../lib/rectangles-isSquare');
let assert = require('chai').assert;
let rectangle = {width: 10, height: 20};

describe('isSquare function', function(){
  it('returns true if it is a suqre', function(){
    assert.equal(isSquare(rectangle), false)
  })
})
