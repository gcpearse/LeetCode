import { convertToTitle } from "../../easy/0168-excel-sheet-column-title"

describe("convertToTitle", () => {
  test("Returns the column title that corresponds to the input column number", () => {
    expect(convertToTitle(1)).toBe("A")
    expect(convertToTitle(28)).toBe("AB")
    expect(convertToTitle(701)).toBe("ZY")
  })
})
