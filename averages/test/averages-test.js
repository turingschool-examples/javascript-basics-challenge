var assert = require('chai').assert

describe ("it can math an array", function() {
  it("total", function() {
    array = [5,7,2,1,5,3,5];
    assert.equal(total(array), 28);
  })

  // it("mean", function() {
  //   array = [5,7,2,1,5,3,5];
  //   assert.equal(mean(array), 4);
  // })

  // it("median", function() {
  //   array = [5,7,2,1,5,3,5];
  //   assert.equal(median(array), 1);
  // })

  // it("mode", function() {
  //   array = [5,7,2,1,5,3,5];
  //   assert.equal(mode(array), 5);
  // })
})
