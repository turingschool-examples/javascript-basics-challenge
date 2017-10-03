
const assert = require('chai').assert;
const rectangles = require('../rectangles');

describe('rectangles functions', function () {
    it('can return the area of the rectangle', function () {
        let rectangle = {width: 10, height: 20};
        assert.equal(rectangles.area(rectangle), 200)
    });

    it('can return the perimeter of the rectangle', function () {
        let rectangle = {width: 10, height: 20};
        assert.equal(rectangles.perimeter(rectangle), 60)
    });

    it('can return the diagonal of the rectangle', function () {
        let rectangle = {width: 10, height: 20};
        assert.equal(rectangles.diagonal(rectangle), 22.360679774997898)
    });

    it('returns true if rectangle is square', function () {
        let rectangle = {width: 10, height: 20};
        assert.isFalse(rectangles.isSquare(rectangle))
    })
});