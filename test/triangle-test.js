const assert = require('chai').assert;
const isTriangle = require('../triangle').isTriangle;
const noZeros = require('../triangle').noZeros;
const noNegatives = require('../triangle').noNegatives;

describe("triangle funtions", function(){
  it("returns false if any of the numbers are zero", function(){
    var expected = false;
    var actual = noZeros(6, 5, 0);
    assert.equal(expected, actual);
  });

  it("returns true if none of the numbers are zero", function(){
    var expected = true;
    var actual = noZeros(6, 5, 4);
    assert.equal(expected, actual);
  });

  it("returns false if any of the numbers are negative", function(){
    var expected = false;
    var actual = noNegatives(6, 5, -2);
    assert.equal(expected, actual);
  });

  it("returns true if none of the numbers are negative", function(){
    var expected = true;
    var actual = noNegatives(6, 5, 4);
    assert.equal(expected, actual);
  });

  it("returns true if the three numbers form an equilateral triangle", function(){
    var expected = true;
    var actual = isTriangle(4, 4, 4);
    assert.equal(expected, actual);
  });

  it("returns true if the three numbers could form the side lengths", function(){
    var expected = true;
    var actual = isTriangle(6, 8, 10);
    assert.equal(expected, actual);
  });

  it("returns false if any of the numbers are negative", function(){
    var expected = false;
    var actual = isTriangle(-2, 1, 5);
    assert.equal(expected, actual);
  });

  it("returns false if any of the numbers are zero", function(){
    var expected = false;
    var actual = isTriangle(0, 0, 0);
    assert.equal(expected, actual);
  });

  it("returns false if the numbers cannot form the sides of a triangle", function(){
    var expected = false;
    var actual = isTriangle(4, 8, 50);
    assert.equal(expected, actual);
  });
});
