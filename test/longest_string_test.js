const assert = require('chai').assert
const longestString = require('../lib/longest_string')
var pry = require('pryjs');

describe ("longestString", function(){
  it ('returns the longest string', function(){
    var array = ['horses', 'cats', 'pinneaples']

    assert.equal(longestString(array), 'pinneaples');
  });
});