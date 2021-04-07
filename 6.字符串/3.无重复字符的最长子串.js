// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

var lengthOfLongestSubstring = function (s) {
  let arr = [], max = 0
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s.charAt(i))
    max = Math.max(max, arr.length)
  }
  return max
}