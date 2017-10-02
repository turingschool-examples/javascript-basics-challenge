const assert = require('chai').assert
const rectangle = require('../rectangle')

describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(rectangle.area({width: 10, height: 20}), 200);
  });
});

describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(rectangle.perimeter({width: 10, height: 20}), 60);
  });
});

describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(rectangle.diagonal({width: 3, height: 4}), 5);
  });
});


describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(rectangle.isSquare({width: 4, height: 4}), true);
  });
});

