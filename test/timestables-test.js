const assert = require('chai').assert
// const timesTable = require('../timestables').timesTable
const makeTable = require('../timestables')




console.log(`console: ${makeTable(5)}`)

describe('timesTables', function () {
  context('timesTable function', function () {
    it('calculates the times table for a number', function () {

      let string = `1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25`

      assert.equal(makeTable(5), string)
      // assert.equal(timesTable(3), 6)
    })
  })

})
