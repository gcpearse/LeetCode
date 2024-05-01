function longestPalindrome(s: string): number {

  type Tally = {
    [key: string]: number
  }

  const tally: Tally = {}

  let count = 0
  let containsOdds = false

  for (const char of s) {
    if (!tally[char]) {
      tally[char] = 1
    } else {
      tally[char]++
    }
  }

  for (const key in tally) {
    if (tally[key] % 2) {
      count += tally[key] - 1
      containsOdds = true
    } else {
      count += tally[key]
    }
  }

  return containsOdds ? count + 1 : count
}


/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/
