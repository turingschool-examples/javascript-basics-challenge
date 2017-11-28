const assert = require('chai').assert;
const pry = require('pryjs')
const longString = require('../lib/longString')

describe('Longest String', function(){
  it('can find longest string', function() {
    var arr =  ['horses', 'cats', 'pineapples'];

    assert.equal(longString(arr), 'pineapples')
  });
})
