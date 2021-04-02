/**param {number[]} nums 
 * return {number[]}
 */

// 第一遍
// var sortArray = function (nums) {
//   let n = nums.length;
//   for (let i = 0; i < n - 1; i++) {
//     var min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     let temp = nums[i];
//     nums[i] = nums[min]
//     nums[min] = temp
//   }
//   return nums;
// };

//第二遍
// var sortArray = function (nums) {
//   let len = nums.length;
//   for (let i = 0; i < len - 1; i++) {
//     let min = i
//     for (let j = i + 1; j < len; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     let temp = nums[i];
//     nums[i] = nums[min]
//     nums[min] = temp
//   }
//   return nums;
// }

//第三遍
var sortArray = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) { // len - 1
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    let temp = nums[i]
    nums[i] = nums[min]
    nums[min] = temp
  }
  return nums
}

console.log(sortArray([5, 2, 3, 1]))