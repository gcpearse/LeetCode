export function isPowerOfFour(n: number): boolean {

  if (n < 0) return false

  let multiplier = 0

  while (4 ** multiplier <= n) {
    if (4 ** multiplier === n) {
      return true
    } else {
      multiplier++
    }
  }

  return false
}


/*

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4^x.

Example 1:

Input: n = 16
Output: true

Example 2:

Input: n = 5
Output: false

Example 3:

Input: n = 1
Output: true

*/
