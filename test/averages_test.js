var assert = require('chai').assert
var total = require('../lib/averages').total
var meanAverage = require('../lib/averages').meanAverage
var medianAverage = require('../lib/averages').medianAverage
var modeAverage = require('../lib/averages').modeAverage

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

  it('returns mode average of collection', function(){
    assert.equal(modeAverage([1,1,4,3,2]), 1)
  })

  it('returns mode average of large unorganized collection', function(){
    assert.equal(modeAverage([500,1,5,1,4,35,1,3,7,3,2,5,1,2,1000,30,1,]), 1)
  })

  it('returns mode average of large unorganized collection again', function(){
    assert.equal(modeAverage([500,8,5,8,4,35,8,3,7,3,2,5,8,2,8000,30,8,]), 8)
  })
})
