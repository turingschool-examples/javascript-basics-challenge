const methods = require('../lib/averages')
const expect = require('chai').expect

describe('array functions', function(){
  it('#total returns the total of an array', function(){
    test = [1,2,3,4]
    expect(test.total()).to.eql(10)
  })
  it('#mean returns the average of an array', function(){
    test = [1,2,3,4]
    expect(test.mean()).to.eql(2.5)
  })
  it('#median returns the median of an array', function(){
    test = [1,2,3,4,5]
    test2 = [1,2,3,4]
    expect(test.median()).to.eql(3)
    expect(test2.median()).to.eql(2.5)
  })
  it('#mode returns the mode of an array', function(){
    test = [1,3,3,4,3]
    expect(test.mode()).to.eql(3)
  })
})
