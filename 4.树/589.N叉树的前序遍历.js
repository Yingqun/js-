// 给定一个 N 叉树，返回其节点值的 前序遍历 。

// N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[1,3,5,6,2,4]

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 递归
var preorder = function (root) {
  const res = []
  function traverse(tree) {
    if (root == null) {
      return res;
    }
    res.push(tree.val)
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i])
    }
    return res;
  }
  return traverse(root)
};
