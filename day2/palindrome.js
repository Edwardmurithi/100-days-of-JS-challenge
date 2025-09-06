/**
 *  Check if a given string is a palindrome
 *  Ignore spaces and and case
 *  contains only alphanumeric and spaces
 *  returs true or false
 */

function isPalindrome(str) {
    let chars = [];
    let reversedWord;
    let pattern = /\s/ig;

    for (let i = str.length; i >= 0; i--) {
        chars.push(str[i]);        
    }

    reversedWord = chars.join("").replace(pattern, "");
    if (str.replace(pattern, "").toLowerCase() === reversedWord.toLowerCase()) return true;
    else return false;
}

// Test Cases
console.log(isPalindrome("Race Car"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal panama"));
