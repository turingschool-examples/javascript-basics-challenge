Array.prototype.pad = function (num, content=null) {
  for(var i = this.length; i < num ; i++) {
      this.push(content)
  }
  return this
}

module.exports = Array
