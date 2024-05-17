export function searchInsert(nums: number[], target: number): number {

  let res = 0

  if (nums.includes(target)) {
    res = nums.indexOf(target)
  } else if (target > nums[nums.length - 1]) {
    res = nums.length
  } else if (target < nums[0]) {
    res = 0
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (target > nums[i] && target < nums[i + 1]) {
        res = i + 1
      }
    }
  }

  return res
}


/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1, 3, 5, 6], target = 5
Output: 2

Example 2:

Input: nums = [1, 3, 5, 6], target = 2
Output: 1

Example 3:

Input: nums = [1, 3, 5, 6], target = 7
Output: 4

*/
