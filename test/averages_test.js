const assert = require('chai').assert
const avgs = require('../averages')

describe("total", function(){
  it("returns total", function(){
    var arr = [1,2,3,4]
    assert.equal(avgs.total(arr), 10)
  });
});

describe("mean", function(){
  it("returns mean", function(){
    var arr = [1,2,3,4,5]
    assert.equal(avgs.mean(arr), 3)
  });
});

describe("median", function(){
  it("returns median", function(){
    var arr = [2,1,5,4,3]
    assert.equal(avgs.median(arr), 3)
  });
});

describe("mode", function(){
  it("returns mode", function(){
    var arr = [1,3,3,4]
    assert.equal(avgs.mode(arr), [3,2])
  });
});
