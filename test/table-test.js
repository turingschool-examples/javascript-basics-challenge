var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var table = require('../table').table


describe("Times table unit test", function(){
  it("returns a long string with newlines", function(){
    assert.equal(table(5), "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25")
  })
})
