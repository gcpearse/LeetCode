export function firstUniqueChar(s: string): number {

  for (const char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return s.indexOf(char)
      break
    }
  }

  return -1
}


/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1

*/
