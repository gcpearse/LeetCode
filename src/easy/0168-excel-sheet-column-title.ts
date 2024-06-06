export function convertToTitle(columnNumber: number): string {

  let current = columnNumber
  let result = ""

  while (current > 0) {

    const remainder = current % 26
    current -= remainder

    if (remainder) {
      result += String.fromCharCode(remainder + 64)
      current /= 26
    } else {
      result += "Z"
      current /= 26
      current--
    }
  }

  return result.split("").reverse().join("")
}


/*

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 
Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

*/
