// https://leetcode-cn.com/problems/container-with-most-water/

// 输入：height = [4,3,2,1,4]
// 输出：16

// var maxArea = function (height) {
//   let result = 0, left = 0, right = height.length - 1;
//   while (left < right) {
//     let smallestSide = Math.min(height[left], height[right]);
//     result = Math.max(result, smallestSide * (right - left));
//     if (height[left] < height[right]) left++;
//     else right--;
//   }
//   return result;
// }

// 第二遍
var maxArea = function (height) {
  let result = 0, left = 0, right = height.length - 1;
  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    result = Math.max(result, smallestSide * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return result;
}

console.log(maxArea([4, 3, 2, 1, 4]))