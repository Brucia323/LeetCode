/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0
  let str = ''
  let s = ''
  for (let k = 0; k < strs[0].length; k++) {
    s = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (s === strs[j][i]) {
        continue
      } else {
        return str
      }
    }
    str += s
    i++
  }
  return str
}
