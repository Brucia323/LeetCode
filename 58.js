/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let l = s.split(' ')
  let a = l.pop()
  while (a === '') {
    a = l.pop()
  }
  return a.length
}
