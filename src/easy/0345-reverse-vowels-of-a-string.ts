function reverseVowels(s: string): string {

  const reversedVowels = s.split("").filter(char => {
    return char.match(/[aeiou]/i)
  }).reverse()

  let result = ""
  let index = 0

  for (const char of s) {
    if (char.match(/[aeiou]/i)) {
      result += reversedVowels[index]
      index++
    } else {
      result += char
    }
  }

  return result
}


/*

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"

*/
