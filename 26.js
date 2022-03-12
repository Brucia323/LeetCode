/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  let j = 0
  while (j < nums.length - 1) {
    if (nums[j] === nums[j + 1]) {
      j++
    } else {
      i++
      j++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
