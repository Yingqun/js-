// https://leetcode-cn.com/problems/valid-anagram/

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false

// 说明:
// 你可以假设字符串只包含小写字母。

var isAnagram = function (s, t) {
  const map = {};
  s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
  t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
  return Object.keys(map).every(k => map[k] === 0);
};

