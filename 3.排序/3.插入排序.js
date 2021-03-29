// 第一遍 插入排序
var insertionSort = function (nums) {
  for (var i = 1; i < nums.length; i++) {
    var value = nums[i];
    var hole = i;
    while (hole > 0 && nums[hole - 1] > value) {
      nums[hole] = nums[hole - 1]
      hole--;
    }
    nums[hole] = value
  }
  return nums;
}

console.log(insertionSort([5, 2, 3, 1]))