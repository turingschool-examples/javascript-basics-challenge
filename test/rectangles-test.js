let pry = require('pryjs');

const assert = require('chai').assert;
const rectangles = require('../rectangles');

describe('rectangles functions', function () {
    it('can return the area of the rectangle', function () {
        let rectangle = {width: 10, height: 20};
        // eval(pry.it);
        assert.equal(rectangles.area(rectangle), 200)
    })
});