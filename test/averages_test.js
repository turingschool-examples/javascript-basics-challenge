var assert = require('chai').assert
var total = require('../lib/averages').total
var meanAverage = require('../lib/averages').meanAverage
var medianAverage = require('../lib/averages').medianAverage

describe('Averages', function(){
  it('can total collection', function(){
    assert.equal(total([1,2,3,4]), 10)
  })

  it('returns mean average', function(){
    assert.equal(meanAverage([1,2,3,4], 2.5))
  })

  it('returns median average of sorted collection odd count', function(){
    assert.equal(medianAverage([1,2,3,4,5]), 3)
  })

  it('returns median average of unsorted collection', function(){
    assert.equal(medianAverage([12,2,30,4,5]), 5)
  })
})
