
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
   })
});