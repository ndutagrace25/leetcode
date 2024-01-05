/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

// const productExceptSelf = (nums) => {
//   const n = nums.length;

//   // Initialize arrays to store products to the left and right of each element
//   const leftProducts = new Array(n).fill(1);
//   const rightProducts = new Array(n).fill(1);

//   // Calculate products to the left of each element
//   let leftProduct = 1;
//   for (let i = 1; i < n; i++) {
//     leftProduct *= nums[i - 1];
//     leftProducts[i] = Math.abs(leftProduct);
//   }

//   // Calculate products to the right of each element
//   let rightProduct = 1;
//   for (let i = n - 2; i >= 0; i--) {
//     rightProduct *= nums[i + 1];
//     rightProducts[i] = Math.abs(rightProduct);
//   }

//   // Calculate the final result by multiplying the left and right products
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result[i] = leftProducts[i] * rightProducts[i];
//   }

//   return result;
// };
const productExceptSelf = (nums) => {
  const n = nums.length;
  let result = new Array(nums.length).fill(1);
  let startIndex = 0;
  let leftProduct = 1;
  let rightProduct = 1;

  while (startIndex < n) {
    result[startIndex] *= Math.abs(leftProduct);
    leftProduct *= nums[startIndex];

    result[n - startIndex - 1] *= Math.abs(rightProduct);
    rightProduct *= nums[n - startIndex - 1];
    startIndex++;
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
