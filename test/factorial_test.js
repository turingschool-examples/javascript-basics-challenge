const assert = require('chai').assert
const file = require('../lib/factorial')

describe('Factorial calculator', function() {
  it('can calculate a factorial', function() {
    actual = file.factorial(4)
    expected = 24

    assert.equal(actual, expected)
  })
})
