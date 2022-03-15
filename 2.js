/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l = new ListNode()
  l.val = l1.val + l2.val
  if (l1.next && l2.next) {
    if (l.val >= 10) {
      l1.next.val += 1
    }
    l.next = addTwoNumbers(l1.next, l2.next)
  } else if (l1.next) {
    l2.val = 0
    if (l.val >= 10) {
      l1.next.val += 1
    }
    l.next = addTwoNumbers(l1.next, l2)
  } else if (l2.next) {
    l1.val = 0
    if (l.val >= 10) {
      l2.next.val += 1
    }
    l.next = addTwoNumbers(l1, l2.next)
  } else {
    if (l.val >= 10) {
      l.next = new ListNode()
      l.next.val = 1
    }
  }
  l.val = l.val % 10
  return l
}
