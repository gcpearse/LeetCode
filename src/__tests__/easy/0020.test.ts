import { isValid } from "../../easy/0020-valid-parentheses"

describe("isValid", () => {
  test("Returns true if the input string is valid", () => {
    expect(isValid("()")).toBe(true)
    expect(isValid("()[]{}")).toBe(true)
  })

  test("Returns false if the input string is invalid", () => {
    expect(isValid("(]")).toBe(false)
  })
})
