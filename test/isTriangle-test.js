const assert = require('chai').assert
const isTriangle = require('../isTriangle')

describe('the isTriangle function', function() {
	it('can return false if any number is negative', function() {
		assert.equal(isTriangle(-2,1,5), false);	
	})
	it('can return false if any number is 0', function() {
		assert.equal(isTriangle(0,0,0), false);
	})
	it('can return true for an equalateral triangle', function() {
		assert.equal(isTriangle(4,4,4), true);
	})
	it('can return true for a right triangle', function() {
		assert.equal(isTriangle(6,8,10), true);
	})
	it('can return true for a right triangle', function() {
		assert.equal(isTriangle(8,6,10), true);
	})
	it('can return false for an impossible triangle', function() {
		assert.equal(isTriangle(4, 8, 50), false);
	})
})
