/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let l = []
  for (let i = 0; i < nums.length; i++) {
    if (l.indexOf(nums[i]) !== -1) {
      return nums[i]
    }
    l.push(nums[i])
  }
}
