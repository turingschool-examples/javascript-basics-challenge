const assert = require('chai').assert
const factorial = require('../js/factorial.js')


describe('factorial', function() {

    it('returns the factorial of a number', function(){
      assert.equal(factorial(4), 24)  
      assert.equal(factorial(14), 87178291200)   
       
    })
})
