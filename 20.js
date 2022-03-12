/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) {
    return false
  }
  let l = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      l.push(s[i])
    } else {
      if (s[i] === ')' && l[l.length - 1] === '(') {
        l.pop()
      } else if (s[i] === '}' && l[l.length - 1] === '{') {
        l.pop()
      } else if (s[i] === ']' && l[l.length - 1] === '[') {
        l.pop()
      } else {
        return false
      }
    }
  }
  if (l.length === 0) {
    return true
  } else {
    return false
  }
}
