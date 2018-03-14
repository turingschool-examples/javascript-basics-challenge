var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var longest = require('../longest').longest


describe("Longest string check", function(){
  it("will give you the longest string in array", function(){
    var animals = ["manbearpig", "manimal", "donkey", "tiger"]

    assert.equal(longest(animals), "manbearpig")
  })

  it("will give you the undefined if array is empty", function(){
    var poop = []

    assert.equal(longest(poop), undefined)
  })
})
