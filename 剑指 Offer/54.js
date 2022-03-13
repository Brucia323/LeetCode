let l = []

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  mid(root)
  return l[l.length - k]
}

const mid = root => {
  if (root.left) {
    mid(root.left)
  }
  l = l.concat(root.val)
  if (root.right) {
    mid(root.right)
  }
}
