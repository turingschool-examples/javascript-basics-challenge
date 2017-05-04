var assert = require('chai').assert
var total = require('../lib/average').total
var mean = require('../lib/average').mean
var median = require('../lib/average').median
var mode = require('../lib/average').mode

describe ('Average', function(){
  it('total value', function(){
    var list = [1,2,3,4,5,6]
    assert.equal(total(list), 21)
  })

  it('average', function(){
    var list = [1,2,3,4,5,6]
    assert.equal(mean(list), 3.5)
  })

  it('median', function(){
    var list = [1,2,3,4,5,6,7]
    assert.equal(median(list), 4)
  })

  it('median even', function(){
    var list = [1,2,3,4,5,6]
    assert.equal(median(list), 3.5)
  })

  it('mode', function(){
    var list = [1,1,3,4,5,6,1]
    assert.equal(mode(list), 1)
  })
})
