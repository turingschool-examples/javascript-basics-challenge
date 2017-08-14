const assert = require('chai').assert
const timesTable = require('../timesTable.js')

describe('timesTable()', () => {
  it('it returns a string with 1 row', () => {
    expect = '1\t\n'
    assert.equal(timesTable(1), expect)
  })

  it('it returns a string with 2 rows', () => {
    expect = '1\t2\t\n2\t4\t\n'
    assert.equal(timesTable(2), expect)
  })

  it('it returns a string with 5 rows', () => {
    expect = '1\t2\t3\t4\t5\t\n2\t4\t6\t8\t10\t\n3\t6\t9\t12\t15\t\n4\t8\t12\t16\t20\t\n5\t10\t15\t20\t25\t\n'
    assert.equal(timesTable(5), expect)
  })
})

// Implement a function called `timesTable` which takes as
// its input an integer representing a number of rows and
// produces a string representing a times table with that number of rows.
//
// The numbers can be separated by any spaces or tabs, but each row
// must be on a new line.  Don't worry if the columns don't line up.
//
// For example, `timesTable(5)` should print the following out to
// the screen:
//
// ```
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25
// ```
