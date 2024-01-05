/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

// const isPalindrome = (s) => {
//   // convert to lower case
//   let formattedString = s.toLowerCase();
//   let palindrome = 0;

//   //   remove non-alphanumeric characters
//   formattedString = formattedString.replace(/[^a-zA-Z0-9]/g, "");

//   let reversedString = formattedString.split("").reverse().join("");

//   if (reversedString === formattedString) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isPalindrome = (s) => {
  // convert to lower case and format string
  let formattedString = s.toLowerCase().replace(/[\W_]/g, "");

  let leftIndex = 0;
  let rightIndex = formattedString.length - 1;

  while (leftIndex < rightIndex) {
    if (formattedString[leftIndex] !== formattedString[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));

// BIG - 0 = O(1)
