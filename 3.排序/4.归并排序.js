
// 第一遍
// var sortArray = function (nums) {
//   let len = nums.length;
//   if (len < 2) return nums;
//   const mid = Math.floor(len / 2)
//   const left = sortArray(nums.slice(0, mid))
//   const right = sortArray(nums.slice(mid, len))
//   return merge(left, right)
// }

// function merge(left, right) {
//   let res = [];
//   while (left.length && right.length) {
//     res.push((left[0] < right[0]) ? left.shift() : right.shift());
//   }
//   return res.concat(left, right);
// }


// 第二遍
var sortArray = function (nums) {
  let len = nums.length;
  if (len < 2) return nums;
  let middle = Math.floor(len / 2)
  let left = sortArray(nums.slice(0, middle))
  let right = sortArray(nums.slice(middle, len))
  return merge(left, right)
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    result.push((left[0] < right[0]) ? left.shift() : right.shift())
  }
  return result.concat(left, right)
}


console.log(sortArray([5, 2, 3, 1]))