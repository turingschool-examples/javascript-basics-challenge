const assert = require('chai').assert;
const timesTable = require('../timesTable');

describe('times table', function(){
  it('returns appropriate size', function(){
    assert.equal(timesTable(5), "string of things")
  });
});
