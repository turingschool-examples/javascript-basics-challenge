const assert = require('chai').assert;
const expect = require('chai').expect;
const rect = require('../lib/rectangle');

describe('Rectanlge', function() {
  context('geometry', function(){
    it('can measure area', function() {
      var rectangle = {width: 10, height: 20}
      assert.equal(rect.area(rectangle), 200)
    });
  })
})

describe('Rectanlge', function() {
  context('geometry', function(){
    it('can measure perimeter', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.perimeter(rectangle), 400)
    });
  })
})

describe('Rectanlge', function() {
  context('geometry', function(){
    it('can measure diagonal', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.diagonal(rectangle), 22)
    });
  })
})

describe('Rectanlge', function() {
  context('geometry', function(){
    it('can tell is rectanlg is a square', function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(rect.isSquare(rectangle), false)
    });
  })
})
