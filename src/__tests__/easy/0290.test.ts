import { wordPattern } from "../../easy/0290-word-pattern"

describe("wordPattern", () => {
  test("Returns true if the pattern matches s", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true)
  })

  test("Returns false if the pattern does not match s", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false)
    expect(wordPattern("aaaa", "dog cat cat fish")).toBe(false)
  })
})
