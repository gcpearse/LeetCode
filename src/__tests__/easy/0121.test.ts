import { maxProfit } from "../../easy/0121-best-time-to-buy-and-sell-stock"

describe("maxProfit", () => {
  test("Returns the maximum profit that can be achieved, if there is profit to be made", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test("If no profit can be achieved, returns 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
