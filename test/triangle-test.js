const assert = require('chai').assert
const {isTriangle} = require('../lib/triangle')

describe('can check', function() {
  it('if not triangle', function() {
    assert.equal(isTriangle(0, 0, 0), false);
  })

  it('if triangle', function() {
    assert.equal(isTriangle(1, 2, 3), true);
  })
});
