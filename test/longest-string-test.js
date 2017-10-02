
const assert = require('chai').assert;
const longestString = require('../longest-string');

describe('longest string', function () {
   it('returns the longest string in the array', function () {
       let stringOfArrays = ['horses', 'cats', 'pineapples'];
       assert.equal(longestString(stringOfArrays), 'pineapples')
   });

   it('returns null', function () {
       assert.equal(longestString([]), null)
   })
});