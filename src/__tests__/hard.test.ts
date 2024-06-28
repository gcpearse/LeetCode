import { trap } from "../hard/0042-trapping-rain-water"


describe("trap", () => {
  test("Returns the volume of water trapped by the elevation map", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
  })
})
