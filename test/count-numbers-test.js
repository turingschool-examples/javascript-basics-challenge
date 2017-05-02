const countNumbersBetween = require('../lib/count-numbers');
const assert = require('chai').assert;

describe("count numbers function", function(){
  it("returns numbers in range", function(){
    assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3);
    assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2);
  });
});
