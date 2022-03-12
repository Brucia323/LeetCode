let s

var CQueue = function () {
  s = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  s.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  let empty = s.shift()
  if (empty) {
    return empty
  } else {
    return -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
