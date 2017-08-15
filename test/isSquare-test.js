const assert = require('chai').assert
const isSquare = require('../isSquare')

describe('the isSquare function', function() {
	let rectangle = {width: 10, height: 20}
	it('can accept a variable with a hash format with keys length and width, returns isSquare', function() {
		assert.equal(isSquare(rectangle), false);	
	})
	let rectangle2 = {width: 20, height: 20}
	it('can calculate isSquare is true', function() {
		assert.equal(isSquare(rectangle2), true);	
	})
})