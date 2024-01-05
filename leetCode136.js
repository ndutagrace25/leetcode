/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note: 
Your algorithm should have a linear runtime complexity. could you implement it without using extra memory

Example 1:
 
Input: [2,2,1]
Output: 1

Example 2:
Input: [4, 1, 2, 1, 2]
Output: 4
*/

const singleNumber = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
};

// const singleNumber = (arr) => {
//   // iterrate over array

//   for (let i = 0; i < arr.length; i++) {
//     // store integer at position 0
//     let item = arr[0];
//     // slice integer at position 0
//     arr = arr.slice(1);

//     // check to see if item is repeated in the now sliced array
//     if (arr.indexOf(item) === -1) {
//       // if not, then return this integer
//       return item;
//     } else {
//       // else, splice out the duplicate
//       arr.splice(arr.indexOf(item), 1);
//     }
//   }
//   return arr;
// };

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
