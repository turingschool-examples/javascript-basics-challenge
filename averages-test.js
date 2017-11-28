const assert = require('chai').assert;
const averageFunctions = require('./averages');

describe('Averages', function() {
  context('total function', function() {
    it('it can get the total of an array', function() {
      array = [2, 4, 6]
      assert.equal(averageFunctions.total(array), 12)
    })
  })
  context('mean function', function() {
    it('it can get the mean of an array', function() {
      array = [2, 4, 6]
      assert.equal(averageFunctions.mean(array), 4)
    })
  })
  context('median function', function() {
    it('it can get the median of an array', function() {
      array = [6, 2, 4]
      assert.equal(averageFunctions.median(array), 4)
    })
    it('it can get the median of an array with two numbers in the middle', function() {
      array = [6, 2, 4, 6]
      assert.equal(averageFunctions.median(array), 5)
    })
  })
  context('mode function', function() {
    it('it can get the mode of an array', function() {
      array = [6, 2, 2, 1]
      assert.equal(averageFunctions.mode(array), 2)
    })
  })
})
