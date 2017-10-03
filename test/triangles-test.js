const assert = require('chai').assert;
const triangle = require('../triangles')

describe('triangle functions', function(){
  it('it cannot have zero-length sides', function(){
    x = 0, y = 1, z = 2
    assert.equal(triangle.isTriangle(x, y, z), false)
  });

  it('it cannot have negative-length sides', function(){
    x = 5, y = -1, z = 2
    assert.equal(triangle.isTriangle(x, y, z), false)
  });

  it('it cannot have unreal side lengths', function(){
    x = 4, y = 8, z = 50
    assert.equal(triangle.isTriangle(x, y, z), false)
  });

  it('it returns true for triangles of valid side lengths', function(){
    x = 6, y = 8, z = 10
    assert.equal(triangle.isTriangle(x, y, z), true)
    x = 10, y = 8, z = 6
    assert.equal(triangle.isTriangle(x, y, z), true)
    x = 8, y = 6, z = 10
    assert.equal(triangle.isTriangle(x, y, z), true)
    x = 8, y = 8, z = 8
    assert.equal(triangle.isTriangle(x, y, z), true)

  });
});


