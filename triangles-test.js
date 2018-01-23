const assert = require('chai').assert;
const isTriangle = require('./triangles');

describe('Triangles Test', function() {
  context('can tell when triangle', function() {
    it('once', function() {
      assert.equal(true, isTriangle(4,4,4));
    });

    it('twice', function() {
      assert.equal(true, isTriangle(6,8,10));
    });

    it('three times', function() {
      assert.equal(true, isTriangle(8,6,10));
    });

    it('four times', function() {
      assert.equal(true, isTriangle(10,8,6));
    });
  });

  context('can tell when not triangle', function() {
    it('once', function() {
      assert.equal(false, isTriangle(0,0,0));
    });

    it('twice', function() {
      assert.equal(false, isTriangle(-2,1,5));
    });

    it('three times', function() {
      assert.equal(false, isTriangle(4,8,50));
    });
  });
});
