
const assert = require('chai').assert;
const expect = require('chai').expect;
const mean = require('../lib/mean')

describe('mean', function() {
  context('mean of list', function() {
    it("can return the mean of all numbers in array", function() {
      let list = [2,4,6]

      assert.deepEqual(mean(list), 4 )
    })
  })
})
