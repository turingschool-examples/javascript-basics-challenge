var expect    = require("chai").expect;
var averages = require("../app/averages");

describe("Averages finds things", function() {
  it("finds the different averages of array stuff", function() {

    var array = [3, 5, 7, 10, 12, 2, 2];

    var total = averages.total(array);
    var mean = averages.mean(array);
    var median = averages.median(array);
    var mode = averages.mode(array);

    expect(total).to.deep.equal(41);
    expect(mean).to.deep.equal(5.857142857142857);
    expect(median).to.deep.equal(5);
    expect(mode).to.deep.equal(2);
  })
})
