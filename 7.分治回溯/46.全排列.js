// https://leetcode-cn.com/problems/permutations/
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 示例:
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function (nums) {
  let res = []
  let used = {}
  dfs([])
  function dfs(path) {
    if (path.length === nums.length) {
      res.push([...path])
    }
    for (let num of nums) {
      if (used[num]) continue
      used[num] = true
      path.push(num)
      dfs(path)
      path.pop()
      used[num] = false
    }
  }
  return res
}
