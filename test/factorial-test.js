var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var factorial = require('../factorial').factorial


describe("Factorial unit test", function(){
  it("returns factorialial amount", function(){
    assert.equal(factorial(5), 120)
})});
