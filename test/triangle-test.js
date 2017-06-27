const assert = require('chai').assert
const isTriangle = require('../lib/triangle')

it('it determines if any sides are zero', function(){
  assert.equal(isTriangle(0,0,0), false)
  assert.equal(isTriangle(0,1,0), false)
  assert.equal(isTriangle(0,1,1), false)
  assert.equal(isTriangle(1,0,1), false)
  assert.equal(isTriangle(1,1,0), false)
})

it('it determines if any sides are negative', function(){
  assert.equal(isTriangle(-2, 1, 5), false)
  assert.equal(isTriangle(2, -1, 5), false)
  assert.equal(isTriangle(2, 1, -5), false)
})

it('it identifies valid triangle configurations', function(){
  assert.equal(isTriangle(4, 4, 4), true)
  assert.equal(isTriangle(6, 8, 10), true)
  assert.equal(isTriangle(8, 6, 10), true)
  assert.equal(isTriangle(10, 8, 6), true)
  assert.equal(isTriangle(4, 8, 50), false)
})
