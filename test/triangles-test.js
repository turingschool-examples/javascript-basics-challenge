const assert = require('chai').assert;
const expect = require('chai').expect;
const isTriangle = require('../lib/triangles');

describe('Triangles', function(){
  context('is it a triangle', function(){
    it('is a triangle', function() {
      assert.isTrue(isTriangle(2,2,3))
    });
    it('is too short', function() {
      assert.isFalse(isTriangle(1,2,3))
    });

    it('is not a triangle', function() {
      assert.isFalse(isTriangle(-1,2,3))
    });
  })
})
