/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let l = s.split(' ')
  let str = l[0]
  for (let i = 1; i < l.length; i++) {
    str += '%20' + l[i]
  }
  return str
}
