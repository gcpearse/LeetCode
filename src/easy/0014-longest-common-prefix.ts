function longestCommonPrefix(strs: string[]): string {

  let prefix = ""

  for (let i = 0; i < strs[0].length; i++) {

    if (strs.every(str => {
      return str[i] === strs[0][i]
    })) {
      prefix += strs[0][i]
    } else {
      break
    }
  }

  return prefix
}


/* 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/
