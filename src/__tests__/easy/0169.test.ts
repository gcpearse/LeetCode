import { majorityElement } from "../../easy/0169-majority-element"

describe("majorityElement", () => {
  test("Returns the majority element in the input array", () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})
