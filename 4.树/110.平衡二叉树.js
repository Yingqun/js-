// https://leetcode-cn.com/problems/balanced-binary-tree/

// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

var isBalanced = function (root) {
  let dfs = function (node) {
    if (!node) return 0;
    let left = 1 + dfs(node.left)
    let right = 1 + dfs(node.right)
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right)
  }

  return dfs(root) == Infinity ? false : true
};