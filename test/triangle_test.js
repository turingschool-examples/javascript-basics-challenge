var assert = require('chai').assert
var isTriangle = require('../lib/triangle').isTriangle

describe('Triangle', function(){
  it('is a triangle', function(){
    assert.isTrue(isTriangle(3,4,5))
  })

  it('is not a triangle', function(){
    assert.isFalse(isTriangle(3,4,50000))
  })

  it('cannot enter negative side', function(){
    assert.isFalse(isTriangle(-1, 30, 1000))
  })

  it('cannot enter non numerical side', function(){
    assert.isFalse(isTriangle("a", 30, "B"))
  })
})
