const assert = require('chai').assert
var myFunctions = require('../averages.js')


describe('averages', function() {
  context('total function', function() {
    it('it can calculate the total of an array', function() {
      var array = [2, 4, 4, 4, 6, 3]
      assert.equal(myFunctions.total(array), 23)
    })
  })

  context('median function', function() {
    it('it can calculate the median of an array', function() {
      var array = [2, 4, 4, 4, 6, 3]
      assert.equal(myFunctions.median(array), 4)
    })
  })

  context('mean function', function() {
    it('it can calculate the mean of an array', function() {
      var array = [2, 4, 4, 4, 6, 3]
      assert.equal(myFunctions.mean(array), 4)
    })
  })
})
