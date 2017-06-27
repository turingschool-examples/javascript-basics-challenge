const assert = require('chai').assert
const triangles = require('../triangles')

describe("triangles", function(){
  it ("can determine if its a triangle", function(){
    assert.isFalse(triangles.isTriangle(0,0,0))
    assert.isFalse(triangles.isTriangle(2,0,2))
    assert.isFalse(triangles.isTriangle(-2,1,5))
    assert.isFalse(triangles.isTriangle(1,-2,5))
    assert.isTrue(triangles.isTriangle(6,8,10))
    assert.isTrue(triangles.isTriangle(4,4,4))
    assert.isTrue(triangles.isTriangle(8,6,10))
    assert.isTrue(triangles.isTriangle(10,8,6))
    assert.isFalse(triangles.isTriangle(4,8,50))
  })
})