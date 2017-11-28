
const assert = require('chai').assert;
const expect = require('chai').expect;
const factoral = require('../lib/factoral')

describe('factoral', function() {
  context('factoral of a number', function() {
    it("can the factoral of a number", function() {

      assert.deepEqual(factoral(5), 120 )
    })
  })
})
