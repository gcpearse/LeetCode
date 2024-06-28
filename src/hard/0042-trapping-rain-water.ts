export function trap(height: number[]): number {

  let volume = 0

  let left = 0
  let right = height.length - 1

  let maxLeft = height[left]
  let maxRight = height[right]

  while (left < right) {

    if (height[left] < height[right]) {

      left++

      if (height[left] > maxLeft) maxLeft = height[left]

      volume += maxLeft - height[left]
    } else {

      right--

      if (height[right] > maxRight) maxRight = height[right]

      volume += maxRight - height[right]
    }
  }

  return volume
}


/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6

Example 2:

Input: height = [4, 2, 0, 3, 2, 5]
Output: 9

*/
