/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1] += 1
  if (digits[digits.length - 1] > 9) {
    for (let i = 1; i <= digits.length; i++) {
      if (digits[digits.length - i] < 10) {
        break
      }
      if (digits.length - 1 >= i) {
        digits[digits.length - i - 1] += 1
        digits[digits.length - i] = 0
      } else if (digits.length - 1 < i) {
        digits[digits.length - i] = 0
        digits = [1].concat(digits)
      }
    }
    if (digits.length === 1) {
      return [1, 0]
    }
  }
  return digits
}
