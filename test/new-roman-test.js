const assert = require('chai').assert
const myFunctions = require('../lib/new-roman')

describe('converts to new roman', function()  {
  it('converts to new roman', function()  {
    assert.strictEqual(myFunctions.convertToNewRoman(9), 'IX')
  })
})
