/**
 * Day 2: Palindrome Checker
 *
 * Problem:
 * Check if a given string is a palindrome (reads the same forwards and backwards),
 * ignoring spaces and case sensitivity.
 *
 * Constraints:
 * - Input: str (string)
 * - 0 ≤ str.length ≤ 1000
 * - Only alphanumeric characters and spaces are present
 * - Must not use built-in reverse()
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} str - The input string to check
 * @returns {boolean} True if the input is a palindrome, false otherwise
 */
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  if (str.length > 1000) {
    throw new RangeError("Input string exceeds maximum length of 1000.");
  }

  // Normalize: remove spaces, lowercase
  const normalized = str.replace(/\s+/g, "").toLowerCase();
  let chars = [];

  for (let i = normalized.length - 1; i >= 0; i--) {
    chars.push(normalized[i]);
  }

  const reversed = chars.join("");
  return normalized === reversed;
}

// Test Cases
console.log(isPalindrome("Race Car"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal panama"));
