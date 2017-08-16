class doesStats {
  getTotal(nums) {
    return nums.reduce(function(sum, val) {
      return sum + val;
    }, 0)
    }
  }

  getMean(nums) {
    return this.total(nums)/nums.length
  }

  getMedian(nums) {
    return nums[Math.ceil((nums.length-1)/2)]
  }


}
