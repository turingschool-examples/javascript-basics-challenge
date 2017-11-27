var expect    = require("chai").expect;
var averages = require("../app/averages");

describe("Average function thing", function() {
  it("performs average functions on an array", function() {

    var array = [3, 5, 7, 10, 12, 2, 2];

    var totalAverage = averages.total(array);
    var meanAverage = averages.mean(array);
    var medianAverage = averages.median(array);
    var modeAverage = averages.mode(array);


    expect(totalAverage).to.deep.equal(41);
    expect(meanAverage).to.deep.equal(5.85714286);
    expect(medianAverage).to.deep.equal(10);
    expect(modeAverage).to.deep.equal();

    });
  });
