const assert = require('chai').assert
const factorial = require('../factorial')

describe('the factorial function', function() {
	it('can return the factorial of an input number', function() {
		assert.equal(factorial(4), 24);	
	})
	it('will return 1 for factorial zero', function() {
		assert.equal(factorial(0), 1);
	})
	it('will return 1 for factorial 1', function() {
		assert.equal(factorial(1), 1);
	})
})