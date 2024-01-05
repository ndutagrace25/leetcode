/* 
Given an array of integers, return indeces of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2,7,11,15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9

returns [0,1]
*/

// 1

// const twoSums = (nums, target) => {
//   let leftIndex = 0;
//   let rightIndex = nums.length - 1;

//   while (leftIndex < rightIndex) {
//     const sum = nums[leftIndex] + nums[rightIndex];
//     if (sum === target) {
//       return [leftIndex, rightIndex];
//     } else if (sum < target) {
//       leftIndex = leftIndex + 1;
//     } else {
//       rightIndex = rightIndex - 1;
//     }
//   }
//   return [];
// };

//  2

const twoSums = (nums, target) => {
  let indeces = [];
  let numsLength = nums.length;

  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
  return indeces;
};

console.log(twoSums([2, 7, 11, 15], 9));
