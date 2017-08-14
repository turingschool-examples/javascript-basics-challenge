const assert = require('chai').assert
const utils  = require('../timesTable')

describe('Time Table', () => {
  it('returns undefined if number is less than 1', () => {
    let result = utils.timesTable(0)
    assert.isUndefined(result)
  })

  it('prints table to console and returns a list of arrays', () => {
    let result = utils.timesTable(5)
    // assert.equal(result, 'Tuesday')
  })
})