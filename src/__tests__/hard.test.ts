import { trap } from "../hard/0042-trapping-rain-water"
import { isNumber } from "../hard/0065-valid-number"
import { fullJustify } from "../hard/0068-text-justification"


describe("trap", () => {
  test("Returns the volume of water trapped by the elevation map", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
  })
})


describe("isNumber", () => {
  test("Returns true if s is a valid number", () => {
    expect(isNumber("0")).toBe(true)
  })

  test("Returns false if s is not a valid number", () => {
    expect(isNumber("e")).toBe(false)
    expect(isNumber(".")).toBe(false)
    expect(isNumber(".1.")).toBe(false)
  })
})


describe("fullJustify", () => {
  test("Returns an array of fully justified text", () => {
    expect(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)).toEqual([
      "This    is    an",
      "example  of text",
      "justification.  "
   ])
    expect(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)).toEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        "
    ])
    expect(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art","is", "everything", "else", "we", "do"], 20)).toEqual([
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  "
    ])
  })
})
