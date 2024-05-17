import { titleToNumber } from "../../easy/0171-excel-sheet-column-number"

describe("titleToNumber", () => {
  test("Returns the column number corresponding to the input column title", () => {
    expect(titleToNumber("A")).toBe(1)
    expect(titleToNumber("AB")).toBe(28)
    expect(titleToNumber("ZY")).toBe(701)
  })
})
