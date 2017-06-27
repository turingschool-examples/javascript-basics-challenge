const timesTable  = require('../lib/timesTable')
const assert = require('chai').assert

describe("timesTable", () => {
  it("regular", () => {
    let assertion = timesTable(5)
    let expected  = '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n'
    assert.equal(assertion, expected)
  })

  xit("two test", () => {
    let assertion = timesTable(7)
    let expected  = `1  2  3  4  5
    2  4  6  8  10
    3  6  9  12 15
    4  8  12 16 20
    5  10 15 20 25`

    assert.equal(assertion, expected)
  })

  xit("three test", () => {
    let assertion = timesTable(10)
    let expected  = `1  2  3  4  5
    2  4  6  8  10
    3  6  9  12 15
    4  8  12 16 20
    5  10 15 20 25`

    assert.equal(assertion, expected)
  })
})
