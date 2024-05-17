import { isPowerOfTwo } from "../../easy/0231-power-of-two"

describe("isPowerOfTwo", () => {
  test("Returns true when passed an integer that is a power of two", () => {
    expect(isPowerOfTwo(1)).toBe(true)
    expect(isPowerOfTwo(16)).toBe(true)
  })

  test("Returns false when passed an integer that is not a power of two", () => {
    expect(isPowerOfTwo(3)).toBe(false)
  })
})
