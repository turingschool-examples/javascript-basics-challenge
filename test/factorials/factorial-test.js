const assert = require('chai').assert
const factorialCalculator = require('../../lib/factorials/factorial.js')

describe('factorialCalculator functionality', function() {
  context('factorialCalculator function', function(){
    it('it can calculate the factorial of a number', function(){
      let number = 0;
      let answer = factorialCalculator(number);

      assert.equal(answer, 1);

      number = 1;
      answer = factorialCalculator(number);

      assert.equal(answer, 1);

      number = 2;
      answer = factorialCalculator(number);

      assert.equal(answer, 2);

      number = 3;
      answer = factorialCalculator(number);

      assert.equal(answer, 6);

      number = 4;
      answer = factorialCalculator(number);

      assert.equal(answer, 24);

      number = 5;
      answer = factorialCalculator(number);

      assert.equal(answer, 120);

      number = 6;
      answer = factorialCalculator(number);

      assert.equal(answer, 720);
    })
  })
})
