const assert = require('chai').assert
const perimeter = require('../perimeter')

describe('the perimeter function', function() {
	let rectangle = {width: 10, height: 20}
	it('can accept a variable with a hash format with keys length and width, calculates perimeter', function() {
		assert.equal(perimeter(rectangle), 60);	
	})
	let rectangle2 = {width: 150, height: 200}
	it('can calculate perimeter with different dimensions', function() {
		assert.equal(perimeter(rectangle2), 700);	
	})
})