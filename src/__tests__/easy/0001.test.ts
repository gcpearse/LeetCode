import { twoSum } from "../../easy/0001-two-sum"

describe("twoSum", () => {
  test("Returns the correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0])
    expect(twoSum([3, 2, 4], 6)).toEqual([2, 1])
    expect(twoSum([3, 3], 6)).toEqual([1, 0])
  })
})
