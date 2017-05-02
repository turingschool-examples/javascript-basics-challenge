const padding = require('../lib/pad')
const expect = require('chai').expect

describe('pad function', function(){
  it('returns the array of number is =< than array count', function(){
    test = [1,2,3]
    expect(test.pad(3, 'apple')).to.eql(test)
    expect(test.pad(2, 'apple')).to.eql(test)
  })
  it('returns the array padded with the padder', function(){
    test = [1,2,3]
    expect(test.pad(5,'apple')).to.eql([1,2,3,'apple','apple'])
    expect(test.pad(5)).to.eql([1,2,3,'null','null'])
  })
})
