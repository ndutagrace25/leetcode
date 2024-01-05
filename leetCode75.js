/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

const reverseVowels = (s) => {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let chars = s.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
