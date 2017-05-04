var assert = require('chai').assert
var isTriangle = require('../lib/triangle').isTriangle

describe('Triangle', function(){
  it('can form a triangle', function(){
    assert.isTrue(isTriangle(10,8,6))
  })
  it('not a triangle', function(){
    assert.isFalse(isTriangle(1,8,6))
  })
  it('not valid input', function(){
    assert.isFalse(isTriangle('A',8,6))
  })
})
