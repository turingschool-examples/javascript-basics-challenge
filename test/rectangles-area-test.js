let area      = require('../lib/rectangles-area');
// let area      = require('../lib/rectangles-area').area;
// module.imports = { area, perimeter, diagonal, isSquare }, require('../lib/rectangles');
let assert = require('chai').assert;
let rectangle = {width: 10, height: 20};

describe('area function', function() {
  it ('returns the area of a rectangle', function(){
    assert.equal(area(rectangle), 200)
  })
})
