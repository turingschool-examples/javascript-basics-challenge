Array.prototype.pad = function (n = -1, padding = null) {
  padArray = new iArray(this, n, padding)
  if(padArray.validNum() == false) { return undefined };
  if(padArray.minimumPadding() == true) { return this }
  return padArray.pad()
}

function iArray(array, n, padding) {
  this.data = array,
  this.n = n,
  this.padding = padding
}

iArray.prototype.validNum = function () {
  return this.n >= 0
}

iArray.prototype.minimumPadding = function () {
  if(this.n == 0) { return true };
  if(this.n <= this.data.length) { return true };
  return false;
}

iArray.prototype.pad = function () {
  for (var i = this.data.length; i < this.n; i++) {
    this.data.push(this.padding)
  }
  return this.data
}