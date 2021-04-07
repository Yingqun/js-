// 示例 1：
// 输入：x = 123
// 输出：321

// 示例 2：
// 输入：x = -123
// 输出：-321

// 示例 3：
// 输入：x = 120
// 输出：21

// 示例 4：
// 输入：x = 0
// 输出：0

// 32 位的有符号整数的范围 [−231,  231 − 1] 
var reverse = function (x) {
  const number = Math.abs(x).toString().split('').reverse().join('');
  if (number > Math.pow(2, 31) - 1) {
    return 0
  }
  return x < 0 ? -number : number;
}
console.log(reverse(231))


