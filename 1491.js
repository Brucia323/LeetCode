/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b)
  salary.shift()
  salary.pop()
  let sum = 0
  salary.forEach(s => (sum += s))
  return sum / salary.length
}
