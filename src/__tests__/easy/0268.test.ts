import { missingNumber } from "../../easy/0268-missing-number"

describe("missingNumber", () => {
  test("Returns the missing number from the input array", () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
    expect(missingNumber([0, 1])).toBe(2)
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
})
