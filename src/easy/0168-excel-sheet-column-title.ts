function convertToTitle(columnNumber: number): string {

  let current = columnNumber
  const result: string[] = []

  while (current > 0) {

    let remainder = current % 26

    if (remainder) {
      result.unshift(String.fromCharCode(remainder + 64))
    } else {
      result.unshift("Z")
    }

    current -= remainder
    if (remainder) {
      current = current / 26
    } else {
      current = current / 26 - 1
    }
  }

  return result.join("")
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
