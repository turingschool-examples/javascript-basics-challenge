assert = require('chai').assert;
const triangle = require('../lib/triangle')

describe('chai tests triangle', function() {
  it('can tell you if those numbers are a potential triangle', function() {
    assert.isTrue(triangle(1, 3, 4));
    assert.isNotTrue(triangle(9, 1, 3));
  })
})
