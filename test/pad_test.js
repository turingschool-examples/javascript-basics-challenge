const assert = require('chai').assert
const pad = require('../pad')


describe("pad function", function(){
  it("returns input array if min size is less than or equal to input number", function(){
    arr = [1,2,3,4,5]
    assert.equal(arr.pad(5), [1,2,3,4,5]);
  });
});

describe("pad function", function(){
  it("returns input array if min size is less than or equal to input number", function(){
    arr = [1,2,3,4,5]
    assert.equal(arr.pad(6), [1,2,3,4,5, null]);
  });
});
