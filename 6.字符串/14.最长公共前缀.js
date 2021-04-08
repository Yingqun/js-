// https://leetcode-cn.com/problems/longest-common-prefix/
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let prefix = ''
  let maxPrefixLength = Math.min(...strs.map(str => str.length))

  for (let i = 0; i < maxPrefixLength; i++) {
    let char = strs[0][i]
    if (strs.every(str => str[i] === char)) {
      prefix += char
    } else {
      break
    }
  }
  return prefix
}

const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))
