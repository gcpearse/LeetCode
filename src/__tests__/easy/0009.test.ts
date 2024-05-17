import { isPalindrome } from "../../easy/0009-palindrome-number"

describe("isPalindrome", () => {
  test("Returns true for a palindromic integer", () => {
    expect(isPalindrome(121)).toBe(true)
  })

  test("Returns false for a non-palindromic integer", () => {
    expect(isPalindrome(-121)).toBe(false)
    expect(isPalindrome(10)).toBe(false)
  })
})
