const assert = require('chai').assert
const array = require('./average')


describe('array functionality', function() {
  context('array function', function(){
    it('returns the total of all the values in the array', function(){
      var actual = [3, 5, 3, 5, 5, 40, 43]
      var expected = 104
      assert.equal(array.total(actual), expected)
    })
  })

  it('returns the mean (average) of the array', function(){
        var actual = [3, 5, 3, 5, 5, 40, 43]
        var expected = 14.857142857142858
        assert.equal(array.mean(actual), expected)
      })

      it('returns the median of the array', function(){
        var actual = [3, 5, 3, 5, 5, 40, 43]
        var expected = 5
        assert.equal(array.median(actual), expected)
      })

      it('returns an object representing the mode', function(){
        var actual = [3, 5, 3, 5, 5, 40, 43]
        var expected = '5,3'
        assert.equal(array.mode(actual), expected)
      })
})
