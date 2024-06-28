export function fullJustify(words: string[], maxWidth: number): string[] {

  const lines: string[][] = []
  let temp: string[] = []

  for (const word of words) {
    if ((word.length + 1) + (temp.join("").length + temp.length - 1) <= maxWidth) {
      temp.push(word)
    } else {
      lines.push(temp)
      temp = []
      temp.push(word)
    }
  }

  lines.push(temp)

  for (const line of lines) {

    let count = maxWidth - line.join("").length

    if (lines.indexOf(line) === lines.length - 1) {
      for (let i = 0; i < line.length - 1; i++) {
        line[i] += " "
        count--
      }
      for (let i = 0; i < count; i++) {
        line[line.length - 1] += " "
      }
    } else if (line.length === 1) {
      for (let i = 0; i < count; i++) {
        line[line.length - 1] += " "
      }
    } else {
      while (count > 0) {
        for (let i = 0; i < line.length - 1; i++) {
          if (count > 0) {
            line[i] += " "
          }
          count--
        }
      }
    }
  }

  const result = lines.map(line => line.join(""))

  return result
}


/*

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 
Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:

Input: words = ["What", "must", "be", "acknowledgment", "shall", "be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:

Input: words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art","is", "everything", "else", "we", "do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

*/
