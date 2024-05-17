import { strStr } from "../../easy/0028-find-the-index-of-the-first-occurrence-in-a-string"

describe("strStr", () => {
  test("If the 'needle' is in the 'haystack', returns the index of the first occurrence", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0)
  })

  test("Returns -1 if the needle is not in the haystack", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1)
  })
})
