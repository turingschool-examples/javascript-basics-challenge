const assert = require('chai').assert
const isTriangle = require('../lib/triangle')
var pry = require('pryjs');


describe('triangle', function() {
   it("returns fals if negative or zero length sides", function () {
     assert.equal(isTriangle(0,0,0), false)
     assert.equal(isTriangle(9, 5, -2), false)
   });

   it("returns true if its an equallateral triangle", function() {
     assert.equal(isTriangle(4,4,4), true)
   });

   it("returns true if its a right angle triangle", function(){
     assert.equal(isTriangle(6,8,10), true)
   });

   it ("returns false if its not an actual triangle", function() {
     assert.equal(isTriangle(4,8,50), false)
   });
});
