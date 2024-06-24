import { lengthOfLongestSubstring } from "../medium/0003-longest-substring-without-repeating-characters"
import { intToRoman } from "../medium/0012-integer-to-roman"


describe("intToRoman", () => {
  test("Returns the Roman equivalent of the input integer", () => {
    expect(intToRoman(3749)).toBe("MMMDCCXLIX")
    expect(intToRoman(58)).toBe("LVIII")
    expect(intToRoman(3749)).toBe("MMMDCCXLIX")
  })
})


describe("lengthOfLongestSubstring", () => {
  test("Returns the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
  })
})
