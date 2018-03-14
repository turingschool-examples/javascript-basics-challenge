const assert = require('chai').assert
const isTriangle = require('../js/triangle.js')


describe('triangle', function() {

    it('returns true if it is a triangle', function(){

      assert.equal(isTriangle(4,4,4), true)
      assert.equal(isTriangle(6,8,10), true)
      assert.equal(isTriangle(0,0,0), false)
      assert.equal(isTriangle(-10,1,2), false)
      
      
    })
})
