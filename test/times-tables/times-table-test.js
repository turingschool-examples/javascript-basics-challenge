const assert = require('chai').assert
const timesTable = require('../../lib/times-tables/times-table.js')

describe('timesTable functionality', function() {
  context('timesTable function', function(){
    it('it can determine the timesTable of an value', function(){
      let number = 2;
      let answer = timesTable(number);

      assert.equal(answer, "1 2 /n2 4 /n")

      number = 5;
      answer = timesTable(number);

      assert.equal(answer, "1 2 3 4 5 /n2 4 6 8 10 /n3 6 9 12 15 /n4 8 12 16 20 /n5 10 15 20 25 /n")

      number = 3;
      answer = timesTable(number);

      assert.equal(answer, "1 2 3 /n2 4 6 /n3 6 9 /n")
    })
  })
})
