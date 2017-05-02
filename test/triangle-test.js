const assert = require('chai').assert;
const isTriangle = require('../lib/triangle');

describe('determine if valid triangle', function() {
  it('checks if 3 sides can make a triangle', function() {
    resultOne = isTriangle(3, 4, 5);
    resultTwo = isTriangle(-3, 4, 5);
    resultThree = isTriangle(1, 1, 1);
    resultFour = isTriangle(0, 0, 0);
    resultFive = isTriangle(4, 8, 50)
    resultSix = isTriangle(3, 3, 3)
    assert.equal(resultOne, true);
    assert.equal(resultTwo, false);
    assert.equal(resultThree, true);
    assert.equal(resultFour, false);
    assert.equal(resultFive, false);
    assert.equal(resultSix, true);
  });
});
