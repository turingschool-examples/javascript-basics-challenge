assert = require('chai').assert;
isTriangle = require('../triangles').isTriangle;

describe('triangle functionality', function(){
  it('checks to see if it is a valid triangle', function(){
    assert.equal(isTriangle(0,0,0),false)
    assert.equal(isTriangle(-2,1,5),false)
    assert.equal(isTriangle(4,4,4),true)
    assert.equal(isTriangle(6,8,10),true)
    assert.equal(isTriangle(8,6,10),true)
    assert.equal(isTriangle(10,8,6),true)
    assert.equal(isTriangle(4, 8, 50),false)
  })
})
