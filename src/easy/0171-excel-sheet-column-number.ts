function titleToNumber(columnTitle: string): number {

  let multiplier = 1
  let result = 0

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle.charCodeAt(i) - 64) * multiplier
    multiplier *= 26
  }

  return result
}


/*

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

Input: columnTitle = "A"
Output: 1

Example 2:

Input: columnTitle = "AB"
Output: 28

Example 3:

Input: columnTitle = "ZY"
Output: 701

*/
