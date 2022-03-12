/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = nums.indexOf(target)
  if (index === -1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i
      }
    }
    return nums.length
  }
  return index
}
