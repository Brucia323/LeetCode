/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0
  for (let num of nums) {
    if (num === target) {
      count++
    }
  }
  return count
}
