const assert = require("chai").assert
const countNumbersBetween = require("../count-numbers-between")

describe('Count the numbers in the array that are between (including) bounds', () => {
  it('Counts numbers between 0 & 100', () => {
    assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3)
  })
  
  it('Counts other numbers between 0 & 100', () => {
    assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2)
  })
  
  it('Counts other numbers between 100 & 300, incl. 100 & 300', () => {
    assert.equal(countNumbersBetween([100, 200, 300, 1, 22], 100, 300), 3)
  })
  
  it('Returns 0 for an empty array', () => {
    assert.equal(countNumbersBetween([], -10, 10), 0)
  })
  
  it('Returns 1 for a number with itself as both bounds', () => {
    assert.equal(countNumbersBetween([5], 5, 5), 1)
  })
})