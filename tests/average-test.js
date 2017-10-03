const assert = require('chai').assert
const average = require('../average')


describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(average.total([1,2,3]), 6);
  });
});


describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(average.mean([1,2,3]), 2);
  });
});

describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(average.median([1,2,3]), 2);
  });
});


describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(average.mode([1,2,2,2,3]), 2);
  });
});
