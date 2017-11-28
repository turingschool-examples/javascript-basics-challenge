var assert = require('assert');
var expect    = require("chai").expect;
var triangleFunctions = require("../lib/triangles");
describe('triangle', function() {
  describe('area', function() {
    it('should return the triangles area', function() {
      var false1 = triangleFunctions.isTriangle(0,0,0)
      var false2 = triangleFunctions.isTriangle(-2,1,5)
      var false3 = triangleFunctions.isTriangle(4,8,50)

      var true1 = triangleFunctions.isTriangle(4,4,4)
      var true2 = triangleFunctions.isTriangle(6,8,10)
      var true3 = triangleFunctions.isTriangle(8,6,10)
      var true4 = triangleFunctions.isTriangle(10,8,6)

      expect(false1).to.be.false;
      expect(false2).to.be.false;
      expect(false3).to.be.false;

      expect(true1).to.be.true;
      expect(true2).to.be.true;
      expect(true3).to.be.true;
      expect(true4).to.be.true;
      });
    });
  });
