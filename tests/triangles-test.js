const assert = require('chai').assert
const triangles = require('../lib/triangles')

describe('Triangles', function() {
  it('isTriangle can evaluate that (0,0,0) IS NOT a triangle', function() {
    assert.equal(triangles.isTriangle(0,0,0), false)
  })

  it('isTriangle can evaluate any negative side as NOT a triangle', function() {
    assert.equal(triangles.isTriangle(-2,1,5), false)
  })

  it('isTriangle can evaluate equal sides as an equalateral triangle', function() {
    assert.equal(triangles.isTriangle(4,4,4), true)
  })

  it('isTriangle can evaluate right triangles', function() {
    assert.equal(triangles.isTriangle(8,6,10), true)
    assert.equal(triangles.isTriangle(10,8,6), true)
    assert.equal(triangles.isTriangle(6,8,10), true)
  })

  it('isTriangle can evaluate for sides for which no triangle exists', function() {
    assert.equal(triangles.isTriangle(4,8,50), false)
  })
})