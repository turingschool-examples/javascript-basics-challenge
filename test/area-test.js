const assert = require('chai').assert
const area = require('../area')

describe('the area function', function() {
	let rectangle = {width: 20, height: 60}
	it('can recieve a variable with a hash structure, and multiply length and width', function() {
		assert.equal(area(rectangle), 1200)
	})
	let rectangle2 = {width: 10, height: 20}
	it('can pass with different width and height', function() {
		assert.equal(area(rectangle2), 200)
	})
})