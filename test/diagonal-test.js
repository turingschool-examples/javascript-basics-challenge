const assert = require('chai').assert
const diagonal = require('../diagonal')

describe('the diagonal function', function() {
	let rectangle = {width: 10, height: 20}
	it('can accept a variable with a hash format with keys length and width, calculates diagonal', function() {
		assert.equal(diagonal(rectangle), 22.3607);	
	})
	let rectangle2 = {width: 150, height: 200}
	it('can calculate diagonal with different dimensions', function() {
		assert.equal(diagonal(rectangle2), 250);	
	})
})