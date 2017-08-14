const assert = require('chai').assert;
const isTriangle = require('../triangles.js');

it('is a function', function() {
  assert.isFunction(isTriangle, 'this is a function');
});

it('can detect if 3 lengths create a triangle', function () {
  assert.deepEqual(isTriangle(0, 0, 0), false);
});
