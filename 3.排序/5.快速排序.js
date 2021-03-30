
// 第一遍
// var sortArray = function (nums) {
//   let len = nums.length;
//   if (len < 2) return nums;
//   let pivot = nums[0], left = [], right = []

//   for (let i = 1; i < len; i++) {
//     if (nums[i] <= pivot) {
//       left.push(nums[i])
//     } else {
//       right.push(nums[i])
//     }
//   }
//   return sortArray(left).concat(pivot, sortArray(right));
// }

// 第二遍
var sortArray = function (nums) {
  let len = nums.length;
  if (len < 2) return nums;
  let pivot = nums[0], left = [], right = []
  for (let i = 1; i < len; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).concat(pivot, sortArray(right))
}

console.log(sortArray([5, 2, 3, 1]))