const assert =  require("chai").assert;
const numbers = require('../lib/averages')

describe("can take an array of numers", function(){
  it("can total the elements", function(){
    const array = [1,2,3,4,5];
    assert.equal(15, numbers.total(array))
  });

  it("can compute the average", function(){
    const array = [1,2,3,4,5];
    assert.equal(3, numbers.mean(array));
  });

  it("can compute the median", function(){
    const array1 = [1,2,4,5,6];
    assert.equal(4, numbers.median(array1));

    const array2 = [1,2,3,5,6,7];
    assert.equal(4, numbers.median(array2));
  })

  it("can compute the mode", function(){
    const array = [0,0,1,1,1,3,4,5]
    assert.equal(numbers.mode(array), 1)
  })
});
