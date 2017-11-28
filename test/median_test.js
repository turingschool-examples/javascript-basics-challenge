
const assert = require('chai').assert;
const expect = require('chai').expect;
const median = require('../lib/median')

describe('median', function() {
  context('median of list', function() {
    it("can return the median of all numbers in array", function() {
      let list = [2,4,5,1,6]

      assert.deepEqual(median(list), 4 )
    })
  })
})
