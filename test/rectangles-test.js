const assert = require('chai').assert;
const area = require('../rectangles');

it('is a function', function() {
  assert.isFunction(area, 'this is a function');
});

it('can find the area of a rectangle', function() {
  var rectangle = {
    width: 10,
    height: 20
  }
  assert.deepEqual(area(rectangle), 200);
});
