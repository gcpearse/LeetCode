function singleNumber(nums: number[]): number {

  const set = new Set<number>()

  for (const num of nums) {
    if (!set.has(num)) {
      set.add(num)
    } else {
      set.delete(num)
    }
  }

  return [...set][0]
}


/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 
Example 1:

Input: nums = [2, 2, 1]
Output: 1

Example 2:

Input: nums = [4, 1, 2, 1, 2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1

*/

// function singleNumber(nums: number[]): number {

//   let res: number = 0

//   type Tally = {
//     [key: number]: number
//   }

//   const tally: Tally = {}

//   for (const num of nums) {
//     if (!tally[num]) {
//       tally[num] = 1
//     } else {
//       tally[num]++
//     }
//   }

//   for (const key in tally) {
//     if (tally[key] === 1) {
//       res = +key
//     }
//   }

//   return res
// }