/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0],
    s = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > s + nums[i]) {
      s = nums[i]
    } else {
      s += nums[i]
    }
    if (s > sum) {
      sum = s
    }
  }
  return sum
}
