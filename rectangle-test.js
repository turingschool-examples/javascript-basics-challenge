const assert = require('chai').assert;
const expect = require('chai').expect;
const rect = require('./rectangles');

describe('Rectangle', function() {
  context('geometry', function(){
    it('measures area', function() {
      var rectangle = {width: 10, height: 20}
      assert.equal(rect.area(rectangle), 200)
    });
  })
})

describe('Rectangle', function() {
  context('geometry', function(){
    it('measures perimeter', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.perimeter(rectangle), 400)
    });
  })
})

describe('Rectangle', function() {
  context('geometry', function(){
    it('measures diagonal', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.diagonal(rectangle), 22)
    });
  })
})

describe('Rectangle', function() {
  context('geometry', function(){
    it('is a square', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.isSquare(rectangle), false)
    });
  })
})
