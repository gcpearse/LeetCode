export function longestPalindrome(s: string): string {

  let longest = ""

  for (let i = 0; i < s.length; i++) {

    if (longest.length >= s.length - i) break

    let temp = ""

    for (let j = i; j < s.length; j++) {

      temp += s[j]

      if (isPalindrome(temp) && temp.length > longest.length) {
        longest = temp
      }
    }

    temp = ""
  }

  return longest
}


function isPalindrome(s: string): boolean {

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}


/*

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

*/
