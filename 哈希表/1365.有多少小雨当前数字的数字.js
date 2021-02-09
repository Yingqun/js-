// https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释： 
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。 
// 对于 nums[3]=2 存在一个比它小的数字：（1）。 
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。

//第一遍
// var smallerNumbersThanCurrent = function(nums) {
//     return nums.map(n => nums.reduce((a, b) =>  a + (n > b ? 1 : 0), 0))
// };

// var smallerNumbersThanCurrent2 = function(nums) {
//     const sortArray = [...nums].sort((a, b) => b - a)
//     const map = new Map(sortArray.map((num, index) => [num, nums.length - index - 1]))
//     return nums.map((num) => map.get(num))
// }


//第二遍
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(n => nums.reduce((a, b)=> a = a + (b < n ? 1 : 0),0))
}
var smallerNumbersThanCurrent2 = function(nums) {
    // nums 和 [...nums]的结果不一样
    const sortArray = [...nums].sort((a, b) => b - a)
    console.log(sortArray)
    const map = new Map(sortArray.map((item, index) => [item, nums.length - index - 1]))
    return nums.map(item => map.get(item))
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
console.log(smallerNumbersThanCurrent2([8,1,2,2,3]))
