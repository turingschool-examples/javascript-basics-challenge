const assert = require('chai').assert
const TT = require('../lib/timesTable')

describe('timesTable(num)', function() {
  context('with an argument as a non-negative integer greater than 0', function() {
    it('returns a multiplication chart with that number (3) of rows and columns', function() {
      expected = '1 2 3 \n2 4 6 \n3 6 9 \n'
      actual = TT.timesTable(3)
      assert.deepEqual(actual, expected)
      console.log(actual)
    })

    it('returns a multiplication chart with that number (4) of rows and columns', function() {
      expected = '1 2 3 4 \n2 4 6 8 \n3 6 9 12 \n4 8 12 16 \n'
      actual = TT.timesTable(4)
      assert.equal(actual, expected)
      console.log(actual)
    })

    it('returns a multiplication chart with that number (5) of rows and columns', function() {
      expected = '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n'
      actual = TT.timesTable(5)
      assert.equal(actual, expected)
      console.log(actual)
    })
  })
})
