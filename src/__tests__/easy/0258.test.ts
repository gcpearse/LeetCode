import { addDigits } from "../../easy/0258-add-digits"

describe("addDigits", () => {
  test("Repeatedly adds together the digits in the input integer until a single digit remains", () => {
    expect(addDigits(38)).toBe(2)
    expect(addDigits(0)).toBe(0)
  })
})
