const assert = require('chai').assert
const isTriangle = require('../triangles')


describe('triangles', function(){
  context('is able to determine if triange', function (){
    it('it returns true if three numbers can be sides of a triangle', function(){

      assert.isTrue(isTriangle(7, 10, 5))
      assert.isFalse(isTriangle(4, 8, 50))
    })
  })
})
