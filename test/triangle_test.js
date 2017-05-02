const assert = require('chai').assert
const isTriangle = require('../triangle').isTriangle;

describe("isTriangle", function(){
  context("says if it's a triangle", function(){
    it("returns false if it's zero", function() {
      assert.isFalse(isTriangle(0,0,0));
    });

    it("returns false if it's a negative", function() {
      assert.isFalse(isTriangle(-2,1,5));
    });

    it("returns true if it's an equaliteral triangle", function() {
      assert.isTrue(isTriangle(4,4,4));
    });

    it("returns true if it is out of order Pythagorean theorum", function() {
      assert.isTrue(isTriangle(6,8,10));
      assert.isTrue(isTriangle(8,6,10));
      assert.isTrue(isTriangle(10,8,6));
    });

    it("returns false if it is not a triangle", function() {
      assert.isFalse(isTriangle(4,8,50));
    });
  });
});