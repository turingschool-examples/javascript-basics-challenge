const assert = require('chai').assert
const Averages = require('../averages')

describe('the total function', function() {
	it('can return the sum of all elements', function() {
		assert.equal(Averages.total([4, 3, 2, 1, 5]), 15);	
	})
})
describe('the mean function', function() {
	it('can return the mean of the array', function() {
		assert.equal(Averages.mean([3, 3, 3, 4, 2]), 3);	
	})
})
describe('the median function', function() {
	it('can return the median of the array', function() {
		assert.equal(Averages.median([34, 3, 23, 14, 28, 98]), 28);	
	})
})
describe('the mode function', function() {
	it('can return the mode of the array', function() {
		assert.deepEqual(Averages.mode([34, 3, 23, 14, 28, 23, 28, 23, 98]), {23: 3} );	
	})
})
