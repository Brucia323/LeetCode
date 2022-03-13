/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > nums[(index + 1) % nums.length]) {
      count++
    }
  }
  return count <= 1
}
