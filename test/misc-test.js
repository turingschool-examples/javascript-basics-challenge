assert = require('chai').assert;
pry = require('pryjs');

let misc = require('../lib/misc')

describe('longestString', function(){
  it('Can find longest string', function(){
    let strings = ['horses', 'cats', 'pineapples']
    assert.equal(misc.longestString(strings), 'pineapples')
  });

  it('Returns Null if array is empty', function(){
    let strings = ['horses', 'cats', 'pineapples']
    assert.equal(misc.longestString(strings), 'pineapples')
  });
});

describe('timesTable', function(){
  it('Can create a Times Table', function(){
    assert.equal(misc.timesTable(5), "1  2  3  4  5  \n2  4  6  8  10 \n3  6  9  12 15 \n4  8  12 16 20 \n5  10 15 20 25 \n")
  });
});
