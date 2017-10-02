const assert = require('chai').assert;
const isTriangle = require('../triangles');

describe('triangles', function () {
    it('returns true if side lengths could form a triangle', function () {
        assert.isTrue(isTriangle(4,4,4), 'equilateral triangle');
        assert.isTrue(isTriangle(6,8,10), 'right triangle');
        assert.isTrue(isTriangle(8,6,10), 'right triangle');
        assert.isTrue(isTriangle(10,8,6), 'right triangle');
        assert.isFalse(isTriangle(4,8,50), 'no such triangle')
    });
    
    it('returns false for negative numbers', function () {
        assert.isFalse(isTriangle(-2,1,5), 'no negative sides')
    });

    it('returns false for length of 0', function () {
        assert.isFalse(isTriangle(0,0,0), '0 length not allowed')
    });
});