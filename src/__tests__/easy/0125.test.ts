import { isValidPalindrome } from "../../easy/0125-valid-palindrome"

describe("isValidPalindrome", () => {
  test("Returns true when passed a palindromic phrase", () => {
    expect(isValidPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  })

  test("Returns false when passed a non-palindromic phrase", () => {
    expect(isValidPalindrome("race a car")).toBe(false)
  })

  test("Returns true when passed an empty string", () => {
    expect(isValidPalindrome(" ")).toBe(true)
  })
})
