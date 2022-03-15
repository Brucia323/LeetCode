/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0
  for (; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return i
}
