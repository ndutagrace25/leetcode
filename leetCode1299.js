/**
 * Given an array arr, replace every element of the array with the greatest element among the elements to its right, and replace the last element with -1
 *
 * After doing so, return the new array.
 *
 * Example:
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 *
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <=10^5
 */

// solution
const myFunction = (arr) => {
  const n = arr.length;
  let maxRight = -1;

  for (let i = n - 1; i >= 0; i--) {
    // store the current elements
    const currentElement = arr[i];

    // replace the cuurent elements with -1
    arr[i] = maxRight;

    // check the maximum value from the right side of the array and compare it aggainst the current element stored and return the maximum value
    maxRight = Math.max(maxRight, currentElement);
  }

  return arr;
};

// console.log(Math.max(10, 12));

const arr = [17, 18, 5, 4, 6, 1];

console.log(myFunction(arr));
