/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


*/

// const isAnagram = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }

//   if (s.split("").sort().join("") === t.split("").sort().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const hashMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    hashMap[sChar] = hashMap[sChar] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];

    if (!hashMap[tChar]) {
      return false;
    } else {
      hashMap[tChar]--;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
