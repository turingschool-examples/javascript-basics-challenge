var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs')
var isTriangle = require('../triangle').isTriangle


describe("Triangle unit test", function(){
  it("is not a valid triangle with zeros", function(){
    assert.equal(isTriangle(0,0,0), false)
  })

  it("is not a valid triangle with negative numbers", function(){
    assert.equal(isTriangle(1,2,-3), false)
  })

  it("is a valid triangle with positive numbers", function(){
    assert.equal(isTriangle(4,8,50), false)
  })

  it("is a valid triangle with positive numbers", function(){
    assert.equal(isTriangle(1,2,3), true)
  })
})
