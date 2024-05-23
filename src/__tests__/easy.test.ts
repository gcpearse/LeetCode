import { twoSum } from "../easy/0001-two-sum"
import { isPalindrome } from "../easy/0009-palindrome-number"
import { romanToInt } from "../easy/0013-roman-to-integer"
import { longestCommonPrefix } from "../easy/0014-longest-common-prefix"
import { isValid } from "../easy/0020-valid-parentheses"
import { strStr } from "../easy/0028-find-the-index-of-the-first-occurrence-in-a-string"
import { searchInsert } from "../easy/0035-search-input-position"
import { lengthOfLastWord } from "../easy/0058-length-of-last-word"
import { plusOne } from "../easy/0066-plus-one"
import { maxProfit } from "../easy/0121-best-time-to-buy-and-sell-stock"
import { isValidPalindrome } from "../easy/0125-valid-palindrome"
import { singleNumber } from "../easy/0136-single-number"
import { convertToTitle } from "../easy/0168-excel-sheet-column-title"
import { majorityElement } from "../easy/0169-majority-element"
import { titleToNumber } from "../easy/0171-excel-sheet-column-number"
import { containsDuplicate } from "../easy/0217-contains-duplicate"
import { isPowerOfTwo } from "../easy/0231-power-of-two"
import { isAnagram } from "../easy/0242-valid-anagram"
import { addDigits } from "../easy/0258-add-digits"
import { missingNumber } from "../easy/0268-missing-number"
import { wordPattern } from "../easy/0290-word-pattern"
import { isPowerOfThree } from "../easy/0326-power-of-three"
import { isPowerOfFour } from "../easy/0342-power-of-four"
import { reverseVowels } from "../easy/0345-reverse-vowels-of-a-string"
import { intersection } from "../easy/0349-intersection-of-two-arrays"
import { isPerfectSquare } from "../easy/0367-valid-perfect-square"
import { canConstruct } from "../easy/0383-ransom-note"
import { firstUniqueChar } from "../easy/0387-first-unique-character-in-a-string"
import { findTheDifference } from "../easy/0389-find-the-difference"
import { isSubsequence } from "../easy/0392-is-subsequence"
import { longestPalindrome } from "../easy/0409-longest-palindrome"
import { fizzBuzz } from "../easy/0412-fizz-buzz"
import { thirdMax } from "../easy/0414-third-maximum-number"
import { countSegments } from "../easy/0434-number-of-segments-in-string"
import { arrangeCoins } from "../easy/0441-arranging-coins"
import { findDisappearedNumbers } from "../easy/0448-find-all-numbers-disappeared-in-an-array"
import { findContentChildren } from "../easy/0455-assign-cookies"
import { licenseKeyFormatting } from "../easy/0482-license-key-formatting"
import { findMaxConsecutiveOnes } from "../easy/0485-max-consecutive-ones"
import { findPoisonedDuration } from "../easy/0495-teemo-attacking"
import { nextGreaterElement } from "../easy/0496-next-greater-element-i"
import { findWords } from "../easy/0500-keyboard-row"
import { findRelativeRanks } from "../easy/0506-relative-ranks"


describe("twoSum", () => {
  test("Returns the correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0])
    expect(twoSum([3, 2, 4], 6)).toEqual([2, 1])
    expect(twoSum([3, 3], 6)).toEqual([1, 0])
  })
})


describe("isPalindrome", () => {
  test("Returns true for a palindromic integer", () => {
    expect(isPalindrome(121)).toBe(true)
  })

  test("Returns false for a non-palindromic integer", () => {
    expect(isPalindrome(-121)).toBe(false)
    expect(isPalindrome(10)).toBe(false)
  })
})


describe("romanToInt", () => {
  test("Correctly converts Roman numerals", () => {
    expect(romanToInt("III")).toBe(3)
    expect(romanToInt("LVIII")).toBe(58)
    expect(romanToInt("MCMXCIV")).toBe(1994)
  })
})


describe("longestCommonPrefix", () => {
  test("Returns the longest common prefix shared by an array of strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  test("Returns an empty string is there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })
})


describe("isValid", () => {
  test("Returns true if the input string is valid", () => {
    expect(isValid("()")).toBe(true)
    expect(isValid("()[]{}")).toBe(true)
  })

  test("Returns false if the input string is invalid", () => {
    expect(isValid("(]")).toBe(false)
  })
})


describe("strStr", () => {
  test("If the 'needle' is in the 'haystack', returns the index of the first occurrence", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0)
  })

  test("Returns -1 if the needle is not in the haystack", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1)
  })
})


describe("searchInsert", () => {
  test("When the target is found, returns the index of the target", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })

  test("When the target is not found, returns the index at which it would be inserted", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
})


describe("lengthOfLastWord", () => {
  test("Returns the length of the last word in the input string", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5)
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4)
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6)
  })
})


describe("plusOne", () => {
  test("Increments the input integer by one and returns the resulting array of digits", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
    expect(plusOne([9])).toEqual([1, 0])
  })
})


describe("maxProfit", () => {
  test("Returns the maximum profit that can be achieved, if there is profit to be made", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test("If no profit can be achieved, returns 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})


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


describe("singleNumber", () => {
  test("Returns the number that does not appear twice in the input array", () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
  })
})


describe("convertToTitle", () => {
  test("Returns the column title that corresponds to the input column number", () => {
    expect(convertToTitle(1)).toBe("A")
    expect(convertToTitle(28)).toBe("AB")
    expect(convertToTitle(701)).toBe("ZY")
  })
})


describe("majorityElement", () => {
  test("Returns the majority element in the input array", () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})


describe("titleToNumber", () => {
  test("Returns the column number corresponding to the input column title", () => {
    expect(titleToNumber("A")).toBe(1)
    expect(titleToNumber("AB")).toBe(28)
    expect(titleToNumber("ZY")).toBe(701)
  })
})


describe("containsDuplicate", () => {
  test("Returns true if any value appears at least twice in the input array", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })

  test("Returns false if every element is distinct", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})


describe("isPowerOfTwo", () => {
  test("Returns true when passed an integer that is a power of two", () => {
    expect(isPowerOfTwo(1)).toBe(true)
    expect(isPowerOfTwo(16)).toBe(true)
  })

  test("Returns false when passed an integer that is not a power of two", () => {
    expect(isPowerOfTwo(3)).toBe(false)
  })
})


describe("isAnagram", () => {
  test("Returns true if t is an anagram of s", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true)
  })

  test("Returns false if t is not an anagram of s", () => {
    expect(isAnagram("rat", "car")).toBe(false)
  })
})


describe("addDigits", () => {
  test("Repeatedly adds together the digits in the input integer until a single digit remains", () => {
    expect(addDigits(38)).toBe(2)
    expect(addDigits(0)).toBe(0)
  })
})


describe("missingNumber", () => {
  test("Returns the missing number from the input array", () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
    expect(missingNumber([0, 1])).toBe(2)
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })
})


describe("wordPattern", () => {
  test("Returns true if the pattern matches s", () => {
    expect(wordPattern("abba", "dog cat cat dog")).toBe(true)
  })

  test("Returns false if the pattern does not match s", () => {
    expect(wordPattern("abba", "dog cat cat fish")).toBe(false)
    expect(wordPattern("aaaa", "dog cat cat fish")).toBe(false)
  })
})


describe("isPowerOfThree", () => {
  test("Returns true when passed an integer that is a power of three", () => {
    expect(isPowerOfThree(27)).toBe(true)
  })

  test("Returns false when passed an integer that is not a power of three", () => {
    expect(isPowerOfThree(0)).toBe(false)
    expect(isPowerOfThree(-1)).toBe(false)
  })
})


describe("isPowerOfFour", () => {
  test("Returns true when passed an integer that is a power of four", () => {
    expect(isPowerOfFour(16)).toBe(true)
    expect(isPowerOfFour(1)).toBe(true)
  })

  test("Returns false when passed an integer that is not a power of four", () => {
    expect(isPowerOfFour(5)).toBe(false)
  })
})


describe("reverseVowels", () => {
  test("Returns a string in which only the vowels from the input string have been reversed", () => {
    expect(reverseVowels("hello")).toBe("holle")
    expect(reverseVowels("leetcode")).toBe("leotcede")
  })
})


describe("intersection", () => {
  test("Returns the intersection of the two input arrays", () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
  })
})


describe("isPerfectSquare", () => {
  test("Returns true if the input integer is a perfect square", () => {
    expect(isPerfectSquare(16)).toBe(true)
  })

  test("Returns false if the input integer is not a perfect square", () => {
    expect(isPerfectSquare(14)).toBe(false)
  })
})


describe("canConstruct", () => {
  test("Returns true if ransomNote can be constructed using the letters from magazine", () => {
    expect(canConstruct("aa", "aab")).toBe(true)
  })

  test("Returns false if ransomNote cannot be constructed using the letters from magazine", () => {
    expect(canConstruct("a", "b")).toBe(false)
    expect(canConstruct("aa", "ab")).toBe(false)
  })
})


describe("firstUniqueChar", () => {
  test("Returns the index of the first non-repeating character in the input string", () => {
    expect(firstUniqueChar("leetcode")).toBe(0)
    expect(firstUniqueChar("loveleetcode")).toBe(2)
  })

  test("Returns -1 if there is no non-repeating character in the input string", () => {
    expect(firstUniqueChar("aabb")).toBe(-1)
  })
})


describe("findTheDifference", () => {
  test("Returns the letter added to t", () => {
    expect(findTheDifference("abcd", "abcde")).toBe("e")
    expect(findTheDifference("", "y")).toBe("y")
  })
})


describe("isSubsequence", () => {
  test("Returns true if s is a subsequence of t", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true)
  })

  test("Returns false if s is not a subsequence of t", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false)
  })
})


describe("longestPalindrome", () => {
  test("Returns the length of the longest palindrome that can be built from the letters in the input string", () => {
    expect(longestPalindrome("abccccdd")).toBe(7)
    expect(longestPalindrome("a")).toBe(1)
  })
})


describe("fizzBuzz", () => {
  test("Returns an accurate FizzBuzz string array response", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"])
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"])
    expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"])
  })
})


describe("thirdMax", () => {
  test("Returns the third distinct maximum number in the input array", () => {
    expect(thirdMax([3, 2, 1])).toBe(1)
    expect(thirdMax([2, 2, 3, 1])).toBe(1)
  })

  test("If the third maximum number does not exist, returns the maximum number", () => {
    expect(thirdMax([1, 2])).toBe(2)
  })
})


describe("countSegments", () => {
  test("Returns the number of segments in the input string", () => {
    expect(countSegments("Hello, my name is John")).toBe(5)
    expect(countSegments("Hello")).toBe(1)
  })
})


describe("arrangeCoins", () => {
  test("Returns the number of complete rows that can be built with n coins", () => {
    expect(arrangeCoins(5)).toBe(2)
    expect(arrangeCoins(8)).toBe(3)
  })
})


describe("findDisappearedNumbers", () => {
  test("Returns an array of the missing integers from the input array", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
    expect(findDisappearedNumbers([1, 1])).toEqual([2])
  })
})


describe("findContentChildren", () => {
  test("Returns the expected number of content children", () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2)
  })
})


describe("licenseKeyFormatting", () => {
  test("Returns the correctly formatted license key", () => {
    expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W")
    expect(licenseKeyFormatting("2-5g-3-J", 2)).toBe("2-5G-3J")
    expect(licenseKeyFormatting("--a-a-a-a--", 2)).toBe("AA-AA")
  })
})


describe("findMaxConsecutiveOnes", () => {
  test("Returns the maximum number of consecutive 1s in the input array", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3)
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2)
  })
})


describe("findPoisonedDuration", () => {
  test("Returns the correct total duration of the poison effect", () => {
    expect(findPoisonedDuration([1, 4], 2)).toBe(4)
    expect(findPoisonedDuration([1, 2], 2)).toBe(3)
  })
})


describe("nextGreaterElement", () => {
  test("Returns an array of the next greatest elements", () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1])
    expect(nextGreaterElement([2, 1, 3], [2, 3, 1])).toEqual([3, -1, -1])
  })
})


describe("findWords", () => {
  test("Returns an array of words that can be typed using only one row of the keyboard", () => {
    expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual(["Alaska", "Dad"])
    expect(findWords(["omk"])).toEqual([])
    expect(findWords(["adsdf","sfd"])).toEqual(["adsdf","sfd"])
  })
})


describe("findRelativeRanks", () => {
  test("Returns an array of relative ranks", () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"])
    expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual(["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"])
  })
})
