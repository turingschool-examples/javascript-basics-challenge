var assert = require('chai').assert;
var isTriangle = require('../is-triangle')

describe("it can determine if a shape is a triangle", function() {
  it("returns true when the sides can form a triangle", function() {
    assert.equal(isTriangle(3, 4, 5), true)
  })

  // it("returns false when the sides contain a negative number", function() {
  //
  // }

  // it("returns 'equilateral triangle' when all sides are the same", function() {
  //
  // })

  // it("returns 'right triangle' when conditions are correct", function() {
  //
  // })

  // it("returns false if the sides cannot form a triangle", function() {
  //
  // })

  // it("returns false if it is given 0 length sides", function() {
  //
  // })
})
