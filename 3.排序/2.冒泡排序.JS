
// 第一遍
var sortArray = function (nums) {
  let n = nums.length;
  for (let k = n - 1; k >= 1; k--) {
    for (let i = 0; i < k; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1)
      }
    }
  }
  function swap(i, j) {
    var temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  return nums;
};

console.log(sortArray([5, 2, 3, 1]))