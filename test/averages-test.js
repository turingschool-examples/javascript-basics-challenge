var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs');
var total = require('../average').total




describe("Numbers", function(){
  it("will return total of all array values", function(){
    var array = [ 1,3,4,5,6]

    assert.equal(total(array), 19)
  })
})
