import { singleNumber } from "../../easy/0136-single-number"

describe("singleNumber", () => {
  test("Returns the number that does not appear twice in the input array", () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
  })
})
