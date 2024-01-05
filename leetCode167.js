/* 
Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up up to a specific target number.

The function twoSum should return indeces of the two numbers such that
they add up to the target, where index1 must be less than index2.

Note:
Your returned answers (both index1 and index2) are not zero-based 
you may assume that each input would have exactly one solution and
you may not use the same element twice.

Example:
Input: numbers = [2,7,11,15], target = 9
Output = [1,2]
*/

// const twoSum = (numbers, target) => {
//   let potentialIndeces = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < target) {
//       if (numbers[i] + numbers[i + 1] === target) {
//         potentialIndeces[0] = i + 1;
//         potentialIndeces[1] = i + 2;
//       }
//     }
//   }

//   return potentialIndeces;
// };

const twoSum = (numbers, target) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex];
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1];
    } else if (sum < target) {
      // move the leftIndex to the right
      leftIndex = leftIndex + 1;
    } else {
      // move the rightIndex to the left
      rightIndex = rightIndex - 1;
    }
  }

  //   no solution found
  return [];
};

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(numbers, target));
