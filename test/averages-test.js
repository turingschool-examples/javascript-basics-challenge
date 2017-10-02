
const assert = require('chai').assert;
const averages = require('../averages');

describe('stats functions', function () {
   it('can return the total', function () {
       let numbers = [1,2,3,4,5];
       assert.equal(averages.total(numbers), 15)
   });

   it('returns the average of the array', function () {
        let numbers = [1,2,3,4,5];
        assert.equal(averages.average(numbers), 3)
   });

   it('return the median of the array', function () {
       let numbers = [1,2,3,4,5];
       assert.equal(averages.median(numbers), 3)
   });

   it('can return the mode of the array', function () {
       let numbers = [1,2,3,4,5,4,4];
       assert.equal(averages.mode(numbers), 4)
   })
});