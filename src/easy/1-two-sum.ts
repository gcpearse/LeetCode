function twoSum(nums: number[], target: number): number[] {

  let res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i !== j) {
        res = [i, j]
      }
    }
  }

  return res
}


console.log(twoSum([2, 7, 11, 15], 9))
