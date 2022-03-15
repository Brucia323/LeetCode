/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f.push(f[i - 2] + f[i - 1])
  }
  return f[n]
}
