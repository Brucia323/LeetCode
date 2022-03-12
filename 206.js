/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let i = head
  let j = i.next
  let k = j.next
  while (i && j && k) {
    j.next = i
    i = j
    j = k
    k = k.next
  }
  while (i && j) {
    j.next = i
    i = j
    j = k
  }
  head.next = null
  return i
}
