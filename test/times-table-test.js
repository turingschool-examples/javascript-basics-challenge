const times = require('../lib/times-table')
const expect = require('chai').expect

describe('times-table functions', function (){
  it('createArray function returns array with numbers', function(){
    expect(times.createArray(5)).to.eql([1, 2, 3, 4, 5])
  })
  it('generateRows  returns array of arrays for table rows', function(){
    expectedReturn = [[ 1, 2, 3, 4, 5 ],
                      [ 2, 4, 6, 8, 10 ],
                      [ 3, 6, 9, 12, 15 ],
                      [ 4, 8, 12, 16, 20 ],
                      [ 5, 10, 15, 20, 25 ]]
    expect(times.generateRows([1,2,3,4,5])).to.eql(expectedReturn )
  })
})
