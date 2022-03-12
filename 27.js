/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (nums[i] !== val) {
      i++
    } else {
      if (nums[j] !== val) {
        nums[i] = nums[j]
      }
      j--
    }
  }
  return i
}
