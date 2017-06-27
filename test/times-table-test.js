const assert = require("chai").assert
const timesTable = require("../times-table")

describe('Times table for a given number', () => {
  it('produces a 3x3 table for the number 3', () => {
    assert.equal(timesTable(3), '1 2 3\n2 4 6 \n3 6 9 \n')
  })
  
  it('produces a 5x5 table for the number 5', () => {
    assert.equal(timesTable(5), '1 2 3 4 5\n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')
  })
})