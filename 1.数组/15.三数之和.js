// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c
// ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：
// 输入：nums = []
// 输出：[]

var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      }
      else if (sum < 0) {
        L++
      }
      else if (sum > 0) {
        R--
      }
    }
  }
  return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
