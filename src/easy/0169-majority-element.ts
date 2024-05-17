export function majorityElement(nums: number[]): number {

  type Tally = {
    [key: string]: number
  }

  const tally: Tally = {}

  for (const num of nums) {
    if (!tally[num]) {
      tally[num] = 1
    } else {
      tally[num]++
    }
  }

  let max = 0
  let res = ""

  for (const key in tally) {
    if (tally[key] > max) {
      max = tally[key]
      res = key
    }
  }

  return +res
}


/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3, 2, 3]
Output: 3

Example 2:

Input: nums = [2, 2, 1, 1, 1, 2, 2]
Output: 2

*/
