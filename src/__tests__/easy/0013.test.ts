import { romanToInt } from "../../easy/0013-roman-to-integer"

describe("romanToInt", () => {
  test("Correctly converts Roman numerals", () => {
    expect(romanToInt("III")).toBe(3)
    expect(romanToInt("LVIII")).toBe(58)
    expect(romanToInt("MCMXCIV")).toBe(1994)
  })
})
