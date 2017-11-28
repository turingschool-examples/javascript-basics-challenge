const expect = require('chai').expect;
const isTriangle = require('../lib/triangle');

describe("Triangle", function() {
  context("isTriangle", function() {
    it("determines if three sides make a triangle", function() {
      var triangle1 = isTriangle(3, 5, 4);
      var triangle2 = isTriangle(5, 5, 5);
      var triangle3 = isTriangle(9, 4, 8);
      var notTriangle1 = isTriangle(0, 3, 2);
      var notTriangle2 = isTriangle(10, 5, 4);
      var notTriangle3 = isTriangle(0, 0, 0);

      expect(triangle1).to.be.true;
      expect(triangle2).to.be.true;
      expect(triangle3).to.be.true;
      expect(notTriangle1).to.be.false;
      expect(notTriangle2).to.be.false;
      expect(notTriangle3).to.be.false;
    });
  });
});