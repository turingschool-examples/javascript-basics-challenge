const assert = require('chai').assert
const triangles = require('../lib/triangles')


describe('function can determine whether a triangle is right or not', function(){

  it('can determine that a triangle has invalid inputs with zeros', function(){
    assert.equal(triangles.isTriangle(0, 0, 0), false)
  })

  // it('can determine that a triangle has invalid inputs with negatives', function(){
  //   assert.equal(triangles.isTriangle(-1, 2, 5), false)
  // })
  //
  // it('can determine that a triangle has invalid inputs with non coprimes', function(){
  //   assert.equal(triangles.isTriangle(1, 2, 3), false)
  // })
  //
  // it('can determine that a triangles attributs are coprimes', function(){
  //   assert.equal(triangles.isTriangle(3, 4, 5), true)
  // })
})
