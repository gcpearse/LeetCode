function findDisappearedNumbers(nums: number[]): number[] {

  const set = new Set<number>(nums)
  const result: number[] = []

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i)
  }

  return result
}


/*

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
Output: [5, 6]

Example 2:

Input: nums = [1, 1]
Output: [2]

*/
