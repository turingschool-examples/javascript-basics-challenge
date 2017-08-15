const assert = require('chai').assert
const longestString = require('../longestString')

describe('the total function', function() {
	it('can return the longest string in an array', function() {
		assert.equal(longestString(["pop", "soda pop", "water"]), "soda pop");	
	})
});

