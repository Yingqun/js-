
// 第一遍
// var sortArray = function (nums) {
//   let n = nums.length;
//   for (let k = n - 1; k >= 1; k--) {
//     for (let i = 0; i < k; i++) {
//       if (nums[i] > nums[i + 1]) {
//         var temp = nums[i]
//         nums[i] = nums[i + 1]
//         nums[i + 1] = temp
//       }
//     }
//   }
//   return nums;
// };



// 第二遍
var sortArray = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums
}

console.log(sortArray([5, 2, 3, 1]))