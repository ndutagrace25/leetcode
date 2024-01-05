/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

const mergeAlternately = (word1, word2) => {

  let slicedCharaters = "";
  let originalWord1 = word1;
  let originalWord2 = word2;

  if (word1.length !== word2.length) {
    if (word1.length > word2.length) {
      word1 = originalWord1.slice(0, originalWord2.length);
      slicedCharaters = originalWord1.slice(
        originalWord2.length,
        originalWord1.length
      );
    } else {
      word2 = originalWord2.slice(0, originalWord1.length);
      slicedCharaters = originalWord2.slice(
        originalWord1.length,
        originalWord2.length
      );
    }
  }
  let combinedLettersArray = [];

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (i === j) {
        combinedLettersArray.push(`${word1[i]}${word2[j]}`);
      }
    }
  }

  return combinedLettersArray.join("") + slicedCharaters;
};

console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
