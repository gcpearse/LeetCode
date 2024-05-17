import { plusOne } from "../../easy/0066-plus-one"

describe("plusOne", () => {
  test("Increments the input integer by one and returns the resulting array of digits", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
    expect(plusOne([9])).toEqual([1, 0])
  })
})
