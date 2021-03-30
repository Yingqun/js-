var inorderTraversal = function (root) {
  const res = []
  function traversal(root) {
    if (root !== null) { // 临界条件
      traversal(root.left)
      res.push(root)
      traversal(root.right)
    }
  }
  traversal(root)
  return res;
}