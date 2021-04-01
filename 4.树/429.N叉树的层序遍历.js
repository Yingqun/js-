// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

var levelOrder = function (root) {
  const res = [];
  BFS(node, 0);
  return res;

  function BFS(node, depth) {
    if (!node) return;
    if (depth === res.length) {
      res.push([])
    }
    res[depth].push(node.val)
    for (child of node.children) {
      BFS(child, depth + 1);
    }
  }
};