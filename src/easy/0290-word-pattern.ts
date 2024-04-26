function wordPattern(pattern: string, s: string): boolean {

  type Tally = {
    [key: string]: string
  }

  const patternArray = pattern.split("")
  const sArray = s.split(" ")

  if (patternArray.length !== sArray.length) return false

  const tally: Tally = {}

  for (let i = 0; i < patternArray.length; i++) {
    if (!tally[patternArray[i]]) {
      for (const key in tally) {
        if (tally[key] === sArray[i]) return false
      }
      tally[patternArray[i]] = sArray[i]
    }
    if (tally[patternArray[i]] !== sArray[i]) return false
  }

  return true
}


/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/
