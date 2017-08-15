var assert = require('chai').assert
var mathing = require('../mathing')

describe ("it can math an array", function() {
  it("total", function() {
    var array = [5,7,2,1,5,3,5];
    var myMath = new mathing;
    assert.equal(myMath.total(array), 28);
  })

  it("mean", function() {
    array = [5,7,2,1,5,3,5];
    var myMath = new mathing;
    assert.equal(myMath.mean(array), 4);
  })

  // it("median", function() {
    // array = [5,7,2,1,5,3,5];
    // var myMath = new mathing;
  //   assert.equal(myMath.median(array), 1);
  // })

  // it("mode", function() {
    // array = [5,7,2,1,5,3,5];
    // var myMath = new mathing;
  //   assert.equal(myMath.mode(array), 5);
  // })
})
