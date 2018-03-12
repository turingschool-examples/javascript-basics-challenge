const assert = require('chai').assert
const Times = require('../lib/times-table')

describe("Times Table", () => {
  it("can produce a times table", () => {
    let expected = [[1,2,3,4], [2,4,6,8], [3,6,9,12], [4,8,12,16]]
    t = new Times
    assert.deepEqual(t.timesTable(4), expected)
  })
})
