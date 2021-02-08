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
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(n => nums.reduce((a, b) =>  a + (b > n ? 1 : 0), 0))
};

//第二遍
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))