const assert = require('chai').assert;
const expect = require('chai').expect;
const total = require('../lib/total')

describe('totals', function() {
  context('sum of numbers', function() {
    it("can determine the sum of all numbers in array", function() {
      let list = [2,3,5]

      assert.deepEqual(total(list), 10 )
    })
  })
})
