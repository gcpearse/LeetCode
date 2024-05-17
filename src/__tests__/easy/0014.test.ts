import { longestCommonPrefix } from "../../easy/0014-longest-common-prefix"

describe("longestCommonPrefix", () => {
  test("Returns the longest common prefix shared by an array of strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  test("Returns an empty string is there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })
})
