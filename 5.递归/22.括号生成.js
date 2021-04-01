// https://leetcode-cn.com/problems/generate-parentheses/

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

var generateParenthesis = function (n) {
  const res = [];
  function go(l, r, s) {
    if (l > r) return; // The number of '(' should be always >= ')'
    if (l === 0 && r === 0) {
      res.push(s);
      return
    }

    if (l > 0) go(l - 1, r, s + '(')
    if (r > 0) go(l, r - 1, s + ')')
  }

  go(n, n, '')
  return res;
};