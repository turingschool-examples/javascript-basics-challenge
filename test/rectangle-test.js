assert = require('chai').assert;
const area = require('../lib/rectangle').area;
const perimeter = require('../lib/rectangle').perimeter;
const diagonal = require('../lib/rectangle').diagonal;
const isSquare = require('../lib/rectangle').isSquare;

describe("Rectangle Calculations", function() {
  var rectangle = { width: 3, height: 4 }

  it("can calculate the area", function() {
    assert.deepEqual(area(rectangle), 12)
  })

  it("can calculate the perimeter", function(){
    assert.deepEqual(perimeter(rectangle), 14)
  })

  it("can calculate the diagonal", function() {
    assert.deepEqual(diagonal(rectangle), 5)
  })

  it("can determine if square", function() {
    assert.deepEqual(isSquare(rectangle), false)
  })
});
