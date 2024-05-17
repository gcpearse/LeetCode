import { lengthOfLastWord } from "../../easy/0058-length-of-last-word"

describe("lengthOfLastWord", () => {
  test("Returns the length of the last word in the input string", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5)
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4)
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6)
  })
})
