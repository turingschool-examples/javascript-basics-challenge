let assert = require('chai').assert;
let isTriangle = require('../lib/triangles-isTriangle');

describe ('isTriangle function', function(){
  it ('returns true if triangle is possible', function(){
    assert.equal(isTriangle(0,0,0), false)
    assert.equal(isTriangle(-2,1,5), false)
    assert.equal(isTriangle(4,4,4), true)
    // assert.equal(isTriangle(4, 8, 50), false)
    assert.equal(isTriangle(10,8,6), false)
    assert.equal(isTriangle(6,8,10), true)
  });
});
