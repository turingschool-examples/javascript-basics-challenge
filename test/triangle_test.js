const assert = require('chai').assert;
const expect = require('chai').expect;
const isTriangle = require('../lib/triangle')

describe('triangles', function() {
  context('is a triangle', function() {
    it("can determine if shape is triangle based on sides", function() {
      let side1 = 3;
      let side2 = 4;
      let side3 = 5;

      assert.deepEqual(isTriangle(side1, side2, side3), true )
    })
  })
})

describe('triangles', function() {
  context('is not a triangle', function() {
    it("can determine if shape is triangle based on sides", function() {
      let side1 = 4;
      let side2 = 8;
      let side3 = 0;

      result = isTriangle(side1, side2, side3)

      assert.equal(result, false )
    })
  })
})
