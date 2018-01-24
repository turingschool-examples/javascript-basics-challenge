var expect = require('chai').expect;
var isTriangle = require('../lib/triangles');

describe("Triangle", function () {
  it("validates triangle", function () {
    var triangle = isTriangle(3, 4, 5)
    var triangle1 = isTriangle(7, 7, 7)
    var lameTriangle = isTriangle(1, 0, 13)
    var lameTriangle1 = isTriangle(-4, 17, 2)

    expect(triangle).to.be.true;
    expect(triangle1).to.be.true;
    expect(lameTriangle).to.be.false;
    expect(lameTriangle1).to.be.false;
  });
});
