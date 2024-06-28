export function trap(height: number[]): number {

  let volume = 0

  for (let i = 1; i < height.length - 1; i++) {

    if (height.slice(0, i).some(x => x > height[i]) && height.slice(i).some(x => x > height[i])) {

      if (Math.max(...height.slice(0, i)) > Math.max(...height.slice(i))) {
        volume += Math.max(...height.slice(i)) - height[i]
      } else {
        volume += Math.max(...height.slice(0, i)) - height[i]
      }
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
