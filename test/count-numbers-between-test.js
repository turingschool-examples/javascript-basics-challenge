const assert = require('chai').assert
const countNumbersBetween = require("../count-numbers-between")


describe('countNumbersBetween', function(){
  context('counts numbers in an array', function (){
    it('it returns the number of elements in an array between to bounds', function(){

      assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3)
      assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2)
      assert.equal(countNumbersBetween([], -10, 10), 0)
    })
  })
})
