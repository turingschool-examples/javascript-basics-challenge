assert = require('chai').assert;
const factoralFunctions = require('../lib/factoral')

describe('chai tests factorals', function() {
  it('can return factoral result', function() {
    assert.deepEqual(factoralFunctions.factoral(4), 24)
  })
  // it('can factoral a big number', function() {
  //   assert.deepEqual(factoralFunctions.factoral(99), 9.33262154439441e+155)
  // })
})
