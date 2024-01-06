/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// var containsDuplicate = function (nums) {
//   let distinct = [...new Set(nums)];
//   if (distinct.length === nums.length) {
//     return false;
//   }

//   let left = 0;
//   let right = nums.length - 1;
//   let result = false;

//   while (left < nums.length) {
//     if (nums[left] === nums[right]) {
//       result = true;
//     }

//     left++;
//   }

//   return result;
// };

//2

const containsDuplicate = (nums) => {
  let visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
