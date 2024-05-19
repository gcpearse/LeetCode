import { intToRoman } from "../medium/0012-integer-to-roman"


describe("intToRoman", () => {
  test("Returns the Roman equivalent of the input integer", () => {
    expect(intToRoman(3749)).toBe("MMMDCCXLIX")
    expect(intToRoman(58)).toBe("LVIII")
    expect(intToRoman(3749)).toBe("MMMDCCXLIX")
  })
})
