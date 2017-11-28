
const assert = require('chai').assert;
const expect = require('chai').expect;
const mode = require('../lib/mode')

describe('mode', function() {
  context('mode of list', function() {
    it("can return the mode of all numbers in array", function() {
      let list = [1,2,2,4,4,5,6,8]

      assert.deepEqual(mode(list), { '1': 1, '2': 2, '4': 2, '5': 1, '6': 1, '8': 1 } )
    })
  })
})
