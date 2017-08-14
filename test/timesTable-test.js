const assert = require('chai').assert
const utils  = require('../timesTable')

describe('Time Table', () => {
  it('returns undefined if number is less than 1', () => {
    let result = utils.timesTable(0)
    assert.isUndefined(result)
  })

  it('prints table to console and returns a list of arrays', () => {
    let result = utils.timesTable(5)
    let expectation = [
      [1,2,3,4,5],
      [2,4,6,8,10],
      [3,6,9,12,15],
      [4,8,12,16,20],
      [5,10,15,20,25]
    ]
    assert.deepEqual(result, expectation)
  })
})