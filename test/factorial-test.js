var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var factor = require('../factorial').factor


describe("Factorial unit test", function(){
  it("returns factorial amount", function(){
    assert.equal(factorial(5), 120)
})});
