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
});

it('can confirm that a triangle cannot have negative length', function () {
  assert.isFalse(isTriangle(-2, 1, 5));
});

it('can confirm that a triangle can be formed from proper lengths', function () {
  assert.isTrue(isTriangle(6, 8, 10));
});

it('can confirm that a triangle cannot be formed from improper lengths', function () {
  assert.isFalse(isTriangle(4, 8, 50));
});
