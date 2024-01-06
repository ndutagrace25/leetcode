/*
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

const maxProduct = (nums) => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let maxProductEndingHere = nums[0];
  let minProductEndingHere = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // Swap maxProductEndingHere and minProductEndingHere if num is negative
    if (num < 0) {
      [maxProductEndingHere, minProductEndingHere] = [
        minProductEndingHere,
        maxProductEndingHere,
      ];
    }

    // Update max and min products ending at the current position
    maxProductEndingHere = Math.max(num, maxProductEndingHere * num);
    minProductEndingHere = Math.min(num, minProductEndingHere * num);

    // Update the global max product
    maxProduct = Math.max(maxProduct, maxProductEndingHere);
  }

  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([0, 2]));
console.log(maxProduct([-2, 3, -4])); 