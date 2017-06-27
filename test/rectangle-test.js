const assert = require('chai').assert;
const rectangle = require('../rectangle');

describe('rectangle functions', function() {

    it('is a function', function() {
      assert.isFunction(rectangle.area);
    });

    it('can determine the rectangle area', function() {
      assert.equal(rectangle.area({width: 10, height: 20}), 200);
    });

    it('can determine the rectangle perimeter', function() {
      assert.equal(rectangle.perimeter({width: 10, height: 20}), 60);
    });

    it('can determine the rectangle diagonal', function() {
      assert.equal(rectangle.diagonal({width: 10, height: 20}), 22);
    });

    it('can determine whether the rectangle is square', function() {
      assert.isFalse(rectangle.isSquare({width: 10, height: 20}));
    });
});
