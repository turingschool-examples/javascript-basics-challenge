const assert = require('chai').assert
const triangle = require('../triangle')


describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(4,4,4), true);
  });
});


describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(6,8,10), true);
  });
});

describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(8,6,10), true);
  });
});

describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(-2,4,4), false);
  });
});


describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(4,4,50), false);
  });
});

describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(triangle.isTriangle(0,0,0), false);
  });
});
