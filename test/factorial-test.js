const assert = require('chai').assert
const myFunctions = require('../lib/factorials')

describe('factorials', function() {
  it ('calculates factorial of 0', function() {
    assert.strictEqual(myFunctions.factorial(0), 1)
  })

  it ('calculates factorial of a number', function()  {
    assert.strictEqual(myFunctions.factorial(4), 24)
  })
})
