export function isAnagram(s: string, t: string): boolean {

  if (s.length !== t.length) return false

  const tally: {[key: string]: number} = {}

  for (const char of s) {
    if (!tally[char]) {
      tally[char] = 1
    } else {
      tally[char]++
    }
  }

  for (const char of t) {
    if (tally[char]) {
      tally[char]--
    } else {
      return false
    }
  }

  return true
}


/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

*/
