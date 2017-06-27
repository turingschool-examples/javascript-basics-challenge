const assert = require('chai').assert
const timesTable = require('../lib/timesTable')
//
// Implement a function called timesTable which takes as its input an integer representing a number of rows and produces a string representing a times table with that number of rows.
//
// The numbers can be separated by any spaces or tabs, but each row must be on a new line. Don't worry if the columns don't line up.
//
// For example, timesTable(5) should print the following out to the screen:

it('prints a times table for a num', function(){
  table1 = "1  2  3  4  5  \n2  4  6  8  10 \n3  6  9  12 15 \n4  8  12 16 20 \n5  10 15 20 25 \n"

  assert.isString(timesTable(5))
  assert.equal(timesTable(5), table1)
})
