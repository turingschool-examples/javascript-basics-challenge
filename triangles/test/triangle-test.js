const assert = require('chai').assert
const isTriangle = require('../triangle')

describe('triangle validity check', function() {
    it('can assert triangle cannot have negative length sides', function(){
      assert.equal(isTriangle(-1,3,4), 'false, because a triangle cannot have negative length sides')
    })

    it('can assert triangle cannot have length of 0 sides', function(){
      assert.equal(isTriangle(1,0,3), 'false, because a triangle cannot have 0 length sides')
    })

    it('can assert that the length sides do not make up a valid triangle', function(){
      assert.equal(isTriangle(2,3,9), 'false, not a real triangle')
    })

    it('can assert that a triangle is a right triangle', function(){
      assert.equal(isTriangle(3,4,5), 'true, it is a right triangle')
    })

    it('can assert that a triangle is equalateral', function(){
      assert.equal(isTriangle(4,4,4), 'true, it is an equalateral triangle')
    })

    it('can assert that three sides make a valid triangle', function(){
      assert.equal(isTriangle(3,3,4), 'true, it is a triangle')
    })
})