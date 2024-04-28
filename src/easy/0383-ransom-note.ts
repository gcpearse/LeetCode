function canConstruct(ransomNote: string, magazine: string): boolean {

  const magazineArray = magazine.split("")

  for (const char of ransomNote) {
    if (!magazineArray.includes(char)) return false
    magazineArray.splice(magazineArray.indexOf(char), 1)
  }

  return true
}


/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/
