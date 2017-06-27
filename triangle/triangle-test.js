const assert = require('chai').assert
const isTriangle = require('./triangle')


describe('isTriangle functionality', function() {
  context('isTriangle function', function(){
    it('it can return false or true when length of triangle changes', function(){
      assert.equal(isTriangle(0, 0, 0), false)
      assert.equal(isTriangle(-2,1,5), false)
      assert.equal(isTriangle(4, 4, 4), true)
      assert.equal(isTriangle(6,8,10), true)
      assert.equal(isTriangle(4, 8, 50), false)
    })
  })
})
