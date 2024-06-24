export function lengthOfLongestSubstring(s: string): number {

  let max = 0
  let temp = ""

  for (let i = 0; i < s.length; i++) {

    if (max >= s.length - i) return max

    for (let j = i; j < s.length; j++) {
      if (!temp.includes(s[j])) {
        temp += s[j]
      } else {
        break
      }
    }

    if (temp.length > max) {
      max = temp.length
    }

    temp = ""
  }

  return max
}


/*

Given a string s, find the length of the longest substring without repeating characters.

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
