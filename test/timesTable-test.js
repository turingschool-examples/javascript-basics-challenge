const assert = require('chai').assert
const timestable  = require('../timesTable').timesTable

describe('timesTable', function() {
    it('can calculate print a times table', function() {
      assert.equal(timesTable(5),'1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n' );
    })
  })
})
