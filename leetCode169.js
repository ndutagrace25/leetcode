/*
Given an array of size n, find the majority element. The majority element
is the element that appears  [n/2 ] times.
You may assume that the array is non-empty and the majority element always exist in the array.

Example 1: 
Input: [3,2,3]
Output: 3

Example 2: 
Input: [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = (nums) => {
  let majorityElement = null;
  //create a dictionary or hash
  const hash = {};

  //iterate over nums & add them to the hash
  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  }

  //iterate over the keys
  let keys = Object.keys(hash);

  for (let i = 0; i < keys.length; i++) {
    //find the key of the largest value/number of repetitions
    if (hash[keys[i]] > nums.length / 2) {
      //return the key (or num from nums)
      majorityElement = keys[i];
    }
  }

  return majorityElement;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
