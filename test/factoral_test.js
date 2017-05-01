const assert = require('chai').assert
const factoral = require('../lib/factoral')
var pry = require('pryjs');

describe('factoral', function(){
  it("is able to give the factoral for a given number", function(){
    assert.equal(factoral(4), 24)
  });
  it("returns a factoral of 1 for zero", function(){
    assert.equal(factoral(1), 1)
  });
});
