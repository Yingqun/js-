// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// https://leetcode-cn.com/problems/fibonacci-number/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 

var fib = function (N) {
  if (N <= 1) {
    return N
  }
  let a = 0;
  let b = 1;
  let i = 2;
  for (; i <= N; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}