import { searchInsert } from "../../easy/0035-search-input-position"

describe("searchInsert", () => {
  test("When the target is found, returns the index of the target", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })

  test("When the target is not found, returns the index at which it would be inserted", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
})
