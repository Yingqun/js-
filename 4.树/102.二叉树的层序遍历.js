// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 
// (即逐层地，从左到右访问所有节点）。
//示例：
//二叉树：[3,9,20,null,null,15,7],
// 返回其层序遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * param {TreeNode} root
 * return {number[][]}
 */

// root就是根节点
var levelOrder = function (root) {
  if (root == null) return []
  let queue = [], res = []
  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length, level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(level)
  }
  return res
}
