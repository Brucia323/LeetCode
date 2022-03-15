/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  for (let i = 0; i < n; i++) {
    s += s[0]
    s = s.substring(1)
  }
  return s
}
