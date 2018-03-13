const assert = require('chai').assert
const isTriangle = require('../source/triangle')

describe('triangle calculations', function() {
  it('can determine whether or not it is a triangle', function(){
    assert.equal(isTriangle(8, 15, 17), true)
    assert.equal(isTriangle(5, 5, 5), true)
    assert.equal(isTriangle(-4, 6, 10), false)
    assert.equal(isTriangle(8, -15, 17), false)
    assert.equal(isTriangle(3, 4, 5), true)
  })
})
