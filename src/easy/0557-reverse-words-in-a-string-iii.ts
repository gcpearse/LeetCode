export function reverseWords(s: string): string {

  const reversedWords: string[] = []
  const words = s.split(" ")

  for (const word of words) {
    reversedWords.push(word.split("").reverse().join(""))
  }

  return reversedWords.join(" ")
}


/*

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"

*/
