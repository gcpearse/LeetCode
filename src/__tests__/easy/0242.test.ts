import { isAnagram } from "../../easy/0242-valid-anagram"

describe("isAnagram", () => {
  test("Returns true if t is an anagram of s", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true)
  })

  test("Returns false if t is not an anagram of s", () => {
    expect(isAnagram("rat", "car")).toBe(false)
  })
})
