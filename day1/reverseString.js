// Reverse a String

function reverseString(str) {
    // TODO:
    // string and returns it reversed. no built-in .reverse() method
    // Input string length ≤ 1000
    // Must use iteration or recursion
    let arrStr = [];
    let strlen = str.length;

    for (let i = strlen - 1; i >= 0; i--) {
        arrStr.push(str[i]);
    }
    return arrStr.join("");
}

// Test Cases
console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("JavaScript")); // Output: tpircSavaJ
console.log(reverseString("a"))
