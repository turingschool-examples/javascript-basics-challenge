const assert = require('chai').assert;
const isTriangle = require('../triangles.js');

it('is a function', function() {
  assert.isFunction(isTriangle, 'this is a function');
});

it('can detect if 3 lengths of 0 do not create a triangle', function () {
  assert.isFalse(isTriangle(0, 0, 0));
});

it('can detect if 3 lengths do create an equilateral triangle', function () {
  assert.isTrue(isTriangle(4, 4, 4));
})
