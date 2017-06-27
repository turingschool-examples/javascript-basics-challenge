/*jshint esversion: 6 */

const assert = require('chai').assert;
const isTriangle = require('../triangles').isTriangle;

describe('Triangles this time! Nice.', function() {
  it('can determine if there are any zero-length sides', function() {
    assert(isTriangle(0, 0, 0) === false);
    assert(isTriangle(1, 3, 0) === false);
  });

  it('can determine if there are any negative-length sides', function() {
    assert(isTriangle(-1, 1, 1) === false);
    assert(isTriangle(-3, -3, 0) === false);
  });

  it('can determine if three sides form a valid triangle', function() {
    assert(isTriangle(4, 4, 4));
    assert(isTriangle(6, 8, 10));
    assert(isTriangle(8, 6, 10));
    assert(isTriangle(10, 8, 6));
    assert(isTriangle(4, 8, 50) !== true);
  });
});
