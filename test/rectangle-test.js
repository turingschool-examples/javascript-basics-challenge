const assert = require('chai').assert;
const area = require('../lib/rectangle').area;
const perimeter = require('../lib/rectangle').perimeter;
const diagonal = require('../lib/rectangle').diagonal;
const isSquare = require('../lib/rectangle').isSquare;

describe("Area", function(){
  it("can calculate the area", function(){
    let rectangle = { width: 2, height: 2 }
    assert.deepEqual(area(rectangle), 4)
  })
})