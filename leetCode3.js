/*Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 
*/

const lengthOfLongestSubstring = (s) => {
  //create an empty hashMap (key/val -> character/index)
  let windowCharsMap = {};
  //Create start and max variable, set both with initial values of zero
  let windowStart = 0;
  let maxLength = 0;
  // loop through Input string
  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = i; 
    maxLength = Math.max(maxLength, i - windowStart + 1)
  }
  //if current character in HashMap & has index >= start
  //set key/value pair on HashMap to be current character/current index
  //if length of current window is greater than max
  //set max to length of current window
  //return max

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
