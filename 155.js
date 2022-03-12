let s

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  s = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  s.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  s.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return s[s.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  let min = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] < min) {
      min = s[i]
    }
  }
  return min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
