export function reverseVowels(s: string): string {

  const chars = s.split("")

  let left = 0
  let right = chars.length - 1

  const vowels = new Set("aeiouAEIOU")

  while (left < right) {

    if (!vowels.has(chars[left])) {
      left++
    }

    if (!vowels.has(chars[right])) {
      right--
    }

    if (vowels.has(chars[left]) && vowels.has(chars[right])) {

      const temp = s[left]

      chars[left] = chars[right]
      chars[right] = temp

      left++
      right--
    }
  }

  return chars.join("")
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
