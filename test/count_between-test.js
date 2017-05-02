const count = require('../lib/count_between')
const expect = require('chai').expect

describe('countNumbersBetween function', function(){
  it('returns the count of numbers within the bounds provided', function(){
    test = [5,6,7,8]
    expect(count.countNumbersBetween(test,4,9)).to.eq(4)
    expect(count.countNumbersBetween(test,10,20)).to.eq(0)
    expect(count.countNumbersBetween(test,6.5,20)).to.eq(2)
  })
})
