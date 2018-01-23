var expect = require('chai').expect;
var average = require('../app/average')

describe('get different mathematical equations', function(){
  it("gets the total, mean, median, mode", function(){
    var total = average.total([1,4,3,2]);
    var mean = average.mean([1,4,3,2]);
    var median = average.median([1,4,3,2]);
    var mode = average.mode([1,4,3,2,2]);

    expect(total).to.deep.equal(10);
    expect(mean).to.deep.equal(2.5);
    expect(median).to.deep.equal(2.5);
    expect(mode).to.deep.equal(2);
  })
})
