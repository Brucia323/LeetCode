/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  let t = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    t.push(t[i - 3] + t[i - 2] + t[i - 1])
  }
  return t[n]
}
