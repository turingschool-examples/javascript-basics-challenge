/*jshint esversion: 6 */

const assert = require('chai').assert;
const timesTable = require('../timesTable');

describe('Times table,', function() {
  it('produces a multiplication table for a given number', function() {
    var table = '1  2  3  4  5' +
                ' 2  4  6  8  10' +
                ' 3  6  9  12 15' +
                ' 4  8  12 16 20' +
                ' 5  10 15 20 25';

    assert.equal(timesTable(5), table);
  });
});
