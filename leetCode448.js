/*
Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.
 
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/

// const findDisappearedNumbers = (nums) => {
//   let n = nums.length;
//   let results = [];

//   for (let i = 0; i < n; i++) {
//     const index = Math.abs(nums[i]) - 1;

//     console.log(index);
//     nums[index] = -Math.abs(nums[index]);
//   }

//   console.log(nums)

//   //collect the indeces of non-negated elements (not visited)
//   for (let j = 0; j < n; j++) {
//     // console.log(nums[j]);
//     if (nums[j] > 0) {
//       results.push(j + 1);
//     }
//   }

//   return results;
// };

const findDisappearedNumbers = (nums) => {
  // create a results array
  let results = [];

  // sort and get rid of duplicates in nums
  let sortedNums = [...new Set(nums)].sort((a, b) => a - b);

  // iterate over this sorted and paired down array
  for (let i = 0; i < nums.length; i++) {
    // if current item is not the same as the next item index push in a results array
    if (i + 1 !== sortedNums[i]) {
      // add missing number to the array
      sortedNums.splice(i, 0, i + 1);
      // push item to the results array
      results.push(i + 1);
    }
  }
  return results;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
