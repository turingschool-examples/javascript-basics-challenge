const assert = require('chai').assert;
const triangle = require('../lib/triangle.js')


describe('Triangle functionality', function(){
  it('isTriangle returns true if it is a valid triangle', function(){
    assert.equal(triangle.isTriangle(10, 8, 6), true);
    assert.equal(triangle.isTriangle(4, 8, 50), false);
  });
});
