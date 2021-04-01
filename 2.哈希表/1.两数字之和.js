// https://leetcode-cn.com/problems/two-sum/submissions/

// var twoSum1 = function(nums, target) { 
//     let map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//        if(map.has(target - nums[i])) {
//            return [map.get(target - nums[i]), i]
//        }else {
//            map.set(nums[i], i)
//        }
//     }
//     return []
// };
// var twoSum2 = function(nums, target) { 
//     let map = {}
//     for(let i = 0; i < nums.length; i++) {
//        if(map[target - nums[i]] !== undefined) {
//            return [map[target - nums[i]], i]
//        }else {
//            map[nums[i]] = i
//        }
//     }
//     return []
// };



// var twoSum1 = function(nums, target) { 
//   let map = new Map();
//   for(let i = 0; i < nums.length; i++) {
//     if(map.has(target - nums[i])) {
//         return [map.get(target - nums[i]),  i]
//     }else {
//         map.set(nums[i], i)
//     }
//   }
//   return []
// };
// var twoSum2 = function (nums, target) {
//     let object = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (object[target - nums[i]] !== undefined) {
//             return [object[target - nums[i]], i]
//         } else {
//             object[nums[i]] = i
//         }
//     }
//     return []
// };

//第三遍
// var twoSum1 = function (nums, target) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     return []
// }

// 第四遍 map
var twoSum1 = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}

const nums = [2, 7, 11, 15]
console.log(twoSum1(nums, 9))
// console.log(twoSum2(nums, 9))