const assert = require('chai').assert
const myFunctions = require('../lib/old-roman')

describe('converts to old roman', function()  {
  it('converts to old roman', function()  {
    assert.strictEqual(myFunctions.convertToOldRoman(9), 'VIIII')
  })
})
